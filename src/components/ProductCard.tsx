'use client';

import { Product } from '@/store/useStore';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, toggleFavorite, favorites } = useStore();
  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300">
          <div className="relative aspect-square bg-muted overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            
            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant={isFavorite ? "default" : "secondary"}
                onClick={handleToggleFavorite}
                className="rounded-full shadow-lg glow-primary"
              >
                <Heart
                  className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`}
                />
              </Button>
            </div>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.category}
            </p>

            <h3 className="font-semibold line-clamp-2 min-h-[3rem]">
              {product.title}
            </h3>

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating.rate}</span>
              <span className="text-xs text-muted-foreground">
                ({product.rating.count})
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              <Button
                size="icon"
                onClick={handleAddToCart}
                className="rounded-full glow-primary"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
