'use client';

import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { ProductGrid } from '@/components/ProductGrid';
import { CartSidebar } from '@/components/CartSidebar';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Star, Zap } from 'lucide-react';

export default function ShopPage() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Curated Collection',
      description: 'Handpicked premium products',
    },
    {
      icon: TrendingUp,
      title: 'Latest Trends',
      description: 'Always fresh arrivals',
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: '4.8+ average rating',
    },
    {
      icon: Zap,
      title: 'Fast Shipping',
      description: 'Free on orders $100+',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <CartSidebar />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Our
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Premium Collection
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Browse our carefully curated selection of premium products designed to elevate your lifestyle.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold mb-1">{highlight.title}</div>
                  <div className="text-xs text-muted-foreground">{highlight.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="container mx-auto"
        >
          <SearchBar />
        </motion.div>
      </section>

      <ProductGrid />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                4.8★
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help you discover the perfect product for your needs.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-soft hover:shadow-soft-lg transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>

      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">LUXE</h3>
              <p className="text-sm text-muted-foreground">
                Premium eCommerce experience with stunning visuals and seamless shopping.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/shop" className="hover:text-foreground transition-colors">All Products</a></li>
                <li><a href="/shop" className="hover:text-foreground transition-colors">New Arrivals</a></li>
                <li><a href="/shop" className="hover:text-foreground transition-colors">Best Sellers</a></li>
                <li><a href="/shop" className="hover:text-foreground transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Luxe Store. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
