'use client';

import { Header } from '@/components/Header';
import { CartSidebar } from '@/components/CartSidebar';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Sparkles, Target, Heart } from 'lucide-react';
      
export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We curate only the finest products that meet our rigorous standards of excellence and craftsmanship.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service and support at every step.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Delivering premium products worldwide with fast, secure, and reliable shipping.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Constantly evolving and embracing new technologies to enhance your shopping experience.',
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and environmentally responsible business practices.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every product we offer and every customer we serve.',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '500+', label: 'Premium Products' },
    { value: '50+', label: 'Countries Served' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CartSidebar />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Redefining Premium
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              eCommerce Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that online shopping should be an experience, not just a transaction.
            We blend cutting-edge technology with timeless elegance to create something extraordinary.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LUXE was born from a simple vision: to create an online shopping destination
                  that feels as premium as the products we offer. We believe that every interaction,
                  from browsing to unboxing, should be memorable.
                </p>
                <p>
                  Our journey began with a small team of passionate individuals who shared a
                  common goal—to challenge the status quo of online retail. Today, we've grown
                  into a global platform trusted by thousands of customers who appreciate quality
                  and innovation.
                </p>
                <p>
                  We don't just sell products; we curate experiences. Each item in our collection
                  is carefully selected to meet our exacting standards, ensuring that when you shop
                  with LUXE, you're choosing excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-soft-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <p className="text-2xl font-bold">Premium Experience</p>
                  <p className="text-muted-foreground">Since 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card p-8 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            To transform online shopping into an art form—where premium quality meets
            exceptional service, and every purchase is a statement of style and sophistication.
          </p>
          <div className="inline-flex items-center gap-2 text-lg font-medium">
            <Target className="w-6 h-6 text-primary" />
            <span>Creating the future of luxury eCommerce</span>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the LUXE difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              Shop Now
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-card text-foreground rounded-lg font-medium shadow-soft hover:shadow-soft-lg transition-all duration-300 border"
            >
              Get in Touch
            </motion.a>
          </div>
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
                <li><a href="/" className="hover:text-foreground transition-colors">All Products</a></li>
                <li><a href="/" className="hover:text-foreground transition-colors">New Arrivals</a></li>
                <li><a href="/" className="hover:text-foreground transition-colors">Best Sellers</a></li>
                <li><a href="/" className="hover:text-foreground transition-colors">Sale</a></li>
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
