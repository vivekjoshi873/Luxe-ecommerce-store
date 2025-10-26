'use client';

import { Header } from '@/components/Header';
import { CartSidebar } from '@/components/CartSidebar';
import { ProductCard } from '@/components/ProductCard';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api';
import { Product } from '@/store/useStore';
import { Skeleton } from '@/components/ui/skeleton';

export default function FavoritesPage() {
  const { favorites } = useStore();
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      setIsLoading(true);
      try {
        const allProducts = await getProducts();
        const filtered = allProducts.filter((product) =>
          favorites.includes(product.id)
        );
        setFavoriteProducts(filtered);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartSidebar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 fill-destructive text-destructive" />
            <h1 className="text-4xl font-bold tracking-tight">
              My Favorites
            </h1>
          </div>
          <p className="text-muted-foreground">
            {favorites.length === 0
              ? 'No favorites yet'
              : `${favorites.length} ${favorites.length === 1 ? 'item' : 'items'} saved`}
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center space-y-6"
          >
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
              <Heart className="h-16 w-16 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">No favorites yet</h2>
              <p className="text-muted-foreground max-w-md">
                Start adding products to your favorites by clicking the heart icon on any product.
              </p>
            </div>
            <Link href="/">
              <Button size="lg" className="rounded-full">
                Explore Products
              </Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {favoriteProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
