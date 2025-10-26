'use client';

import { Product, useStore } from '@/store/useStore';
import { Header } from '@/components/Header';
import { CartSidebar } from '@/components/CartSidebar';
import { ImageCarousel } from '@/components/ImageCarousel';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Check, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart, toggleFavorite, favorites, cart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const isFavorite = favorites.includes(product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const images = [product.image, product.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartSidebar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <Link href="/">
          <Button variant="ghost" className="mb-6 -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageCarousel images={images} productTitle={product.title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="uppercase">
                {product.category}
              </Badge>
              {product.rating.rate >= 4.5 && (
                <Badge className="bg-yellow-500 text-white">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Top Rated
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating.rate)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating.rate}</span>
              <span className="text-muted-foreground">
                ({product.rating.count} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-4">
              <p className="text-5xl font-bold">${product.price.toFixed(2)}</p>
              <p className="text-xl text-muted-foreground line-through">
                ${(product.price * 1.3).toFixed(2)}
              </p>
              <Badge variant="destructive" className="text-base">
                Save 23%
              </Badge>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <label className="font-semibold">Quantity:</label>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-none"
                >
                  -
                </Button>
                <span className="px-6 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="rounded-none"
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 rounded-full glow-primary text-base h-14"
              >
                {addedToCart ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant={isFavorite ? 'default' : 'outline'}
                onClick={() => toggleFavorite(product.id)}
                className="rounded-full h-14 px-8"
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`}
                />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Truck className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">Free Shipping</h4>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Shield className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">Secure Payment</h4>
                  <p className="text-xs text-muted-foreground">100% protected</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Check className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">Easy Returns</h4>
                  <p className="text-xs text-muted-foreground">30-day guarantee</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Product Details</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium capitalize">{product.category}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Product ID</dt>
                      <dd className="font-medium">PROD-{product.id}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Rating</dt>
                      <dd className="font-medium">{product.rating.rate} / 5.0</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Availability</dt>
                      <dd className="font-medium text-green-600">In Stock</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Premium quality materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Sustainably sourced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Expertly crafted design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Backed by warranty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border rounded-lg p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                          U{i + 1}
                        </div>
                        <div>
                          <p className="font-semibold">User {i + 1}</p>
                          <p className="text-xs text-muted-foreground">
                            Verified Purchase
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Excellent product! Highly recommend for anyone looking for quality.
                      The attention to detail is impressive and it exceeded my expectations.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-8">
              <div className="space-y-6 max-w-2xl">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Shipping Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer fast and reliable shipping options to get your order to you quickly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Free standard shipping on orders over $50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Express shipping available at checkout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Orders processed within 1-2 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Tracking information provided</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-4">Returns & Exchanges</h3>
                  <p className="text-muted-foreground">
                    Not satisfied? We offer a 30-day return policy for most items. Items must be
                    unused and in original packaging. Contact us to initiate a return.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}
