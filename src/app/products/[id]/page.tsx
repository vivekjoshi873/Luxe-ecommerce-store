import { Metadata } from 'next';
import { getProduct, getProducts } from '@/lib/api';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { notFound } from 'next/navigation';

/**
 * Product detail page with dynamic routing
 * SEO Optimized: Dynamic metadata, JSON-LD schema
 * Performance: Static generation with revalidation
 */

interface ProductPageProps {
  params: { id: string };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} | Luxe Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
      type: 'website',
    },
  };
}

// Generate static paths for better performance
export async function generateStaticParams() {
  const products = await getProducts();
  
  return products.slice(0, 20).map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.image,
    description: product.description,
    sku: `PROD-${product.id}`,
    offers: {
      '@type': 'Offer',
      url: `https://luxestore.com/products/${product.id}`,
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.rate,
      reviewCount: product.rating.count,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
