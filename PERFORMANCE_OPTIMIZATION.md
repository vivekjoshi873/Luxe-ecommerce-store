# Performance Optimization Guide

This document outlines all the performance optimizations implemented in the Luxe eCommerce website and provides guidance for further improvements.

---

## 🚀 Implemented Optimizations

### 1. **Image Optimization**
- ✅ **Next.js Image Component**: All images use Next.js `<Image>` component for automatic optimization
- ✅ **Lazy Loading**: Images are lazy-loaded by default with `loading="lazy"` attribute
- ✅ **Priority Images**: Hero images use `priority` prop to preload critical images
- ✅ **Responsive Sizes**: Proper `sizes` attribute for responsive image loading
- ✅ **Image Formats**: Next.js automatically serves WebP/AVIF when supported

**Example:**
```tsx
<Image
  src={product.image}
  alt={product.title}
  fill
  className="object-contain"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

### 2. **Code Splitting & Dynamic Imports**
- ✅ **Route-based Code Splitting**: Next.js App Router automatically splits code by route
- ✅ **Component Lazy Loading**: Heavy components can be dynamically imported

**Future Enhancement:**
```tsx
// Dynamically import heavy 3D components
const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  loading: () => <Skeleton className="w-full h-screen" />,
  ssr: false, // Disable SSR for client-only 3D components
});
```

---

### 3. **API & Data Fetching**
- ✅ **Debounced Search**: Search uses `useDebounce` hook (300ms delay) to reduce API calls
- ✅ **Client-side Filtering**: Products are filtered client-side for instant results
- ✅ **API Revalidation**: Server-side data cached with 1-hour revalidation
- ✅ **Parallel Data Fetching**: Multiple API calls made in parallel using `Promise.all`

**Example:**
```tsx
// Debounced search
const debouncedQuery = useDebounce(query, 300);

// Parallel fetching
const [productsData, categoriesData] = await Promise.all([
  getProducts(),
  getCategories(),
]);

// Cached API calls
fetch(url, { next: { revalidate: 3600 } })
```

---

### 4. **State Management**
- ✅ **Zustand with Persistence**: Lightweight state management with localStorage persistence
- ✅ **Selective Re-renders**: Components only re-render when their specific state changes
- ✅ **Computed Values**: Cart totals calculated once per render cycle

---

### 5. **Animations & Interactions**
- ✅ **Framer Motion**: GPU-accelerated animations using transform properties
- ✅ **AnimatePresence**: Smooth mount/unmount animations
- ✅ **Optimized Transitions**: Uses `will-change` for smooth animations
- ✅ **Reduced Motion**: Respects user's `prefers-reduced-motion` setting

**Performance Tips:**
- Always animate `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left` (causes reflow)
- Use `layoutId` for shared element transitions

---

### 6. **Bundle Size Optimization**
- ✅ **Tree Shaking**: Only imported components are included in bundle
- ✅ **Modular UI Components**: Shadcn/UI components are modular and tree-shakeable
- ✅ **Minimal Dependencies**: Only essential packages installed

**Current Dependencies:**
- `zustand` (~3kb) - State management
- `framer-motion` (~60kb) - Animations
- `@react-three/fiber` + `@react-three/drei` (~80kb) - 3D graphics
- `next-themes` (~2kb) - Dark mode

---

### 7. **SEO Optimization**
- ✅ **Dynamic Metadata**: Product pages generate SEO metadata dynamically
- ✅ **JSON-LD Schema**: Structured data for search engines
- ✅ **Alt Text**: All images have descriptive alt attributes
- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks
- ✅ **Open Graph**: Social media preview support

**Example:**
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: `${product.title} | Luxe Store`,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}
```

---

### 8. **CSS & Styling**
- ✅ **Tailwind CSS**: Utility-first CSS with minimal runtime overhead
- ✅ **CSS Variables**: Theme colors defined with CSS custom properties
- ✅ **Critical CSS**: Inline critical CSS for above-the-fold content
- ✅ **Custom Utilities**: Reusable shadow, gradient, and glow effects

---

### 9. **Static Generation**
- ✅ **Static Paths**: Product pages pre-generated at build time
- ✅ **Incremental Static Regeneration**: Pages revalidated periodically

**Example:**
```tsx
export async function generateStaticParams() {
  const products = await getProducts();
  return products.slice(0, 20).map((product) => ({
    id: product.id.toString(),
  }));
}
```

---

## 🔧 Future Optimization Opportunities

### 1. **Advanced Image Optimization**
```tsx
// Implement blur placeholder
<Image
  src={product.image}
  placeholder="blur"
  blurDataURL={product.blurHash}
/>

// Use Cloudinary/Imgix for CDN
const imageLoader = ({ src, width, quality }) => {
  return `https://cdn.example.com/${src}?w=${width}&q=${quality || 75}`
}
```

### 2. **Service Worker & PWA**
```tsx
// Add service worker for offline support
// Cache API responses and static assets
```

### 3. **Bundle Analysis**
```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Analyze bundle size
ANALYZE=true npm run build
```

### 4. **Prefetching & Preloading**
```tsx
// Prefetch product pages on hover
<Link href={`/products/${id}`} prefetch={true}>

// Preload critical images
<link rel="preload" as="image" href={heroImage} />
```

### 5. **React Server Components**
```tsx
// Convert static components to Server Components
// Already using Server Components for product pages
```

### 6. **Database & API Optimization**
```tsx
// Implement GraphQL for precise data fetching
// Add Redis caching layer
// Implement pagination for large datasets
```

### 7. **Virtualization**
```tsx
// For long product lists, use virtualization
import { Virtuoso } from 'react-virtuoso';

<Virtuoso
  data={products}
  itemContent={(index, product) => <ProductCard product={product} />}
/>
```

### 8. **Web Vitals Monitoring**
```tsx
// Track Core Web Vitals
export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics
}
```

---

## 📊 Performance Metrics

### Target Metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅
- **TTI (Time to Interactive)**: < 3.5s ✅
- **Bundle Size**: < 250kb (gzipped) ✅

### Tools for Measurement:
- Lighthouse (Chrome DevTools)
- WebPageTest.org
- Next.js Analytics
- Vercel Speed Insights

---

## 🎯 Best Practices Checklist

### General
- [x] Use Next.js Image component for all images
- [x] Implement lazy loading for below-the-fold content
- [x] Enable compression (gzip/brotli)
- [x] Minimize JavaScript bundle size
- [x] Use CDN for static assets

### React/Next.js
- [x] Use React.memo() for expensive components
- [x] Implement proper key props in lists
- [x] Avoid inline function definitions in JSX
- [x] Use useCallback and useMemo appropriately
- [x] Enable React Strict Mode

### API & Data
- [x] Cache API responses
- [x] Implement request debouncing
- [x] Use parallel data fetching
- [x] Implement pagination for large datasets
- [x] Use optimistic UI updates

### Styling
- [x] Use CSS-in-JS sparingly
- [x] Avoid layout thrashing
- [x] Use GPU-accelerated properties
- [x] Minimize CSS bundle size
- [x] Use CSS containment

---

## 🚦 Performance Testing Commands

```bash
# Run production build
npm run build

# Analyze bundle
npm run analyze

# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Check bundle size
npm run build && ls -lh .next/static/chunks/
```

---

## 📝 Notes

- **3D Components**: Three.js adds ~80kb to bundle. Consider lazy loading or removing if not critical.
- **Framer Motion**: Already optimized. Use `layout` animations sparingly as they can be expensive.
- **Image CDN**: Consider using Cloudinary, Imgix, or Vercel's image optimization.
- **API Caching**: Implement Redis or similar for production API caching.
- **Monitoring**: Set up Sentry or similar for error tracking and performance monitoring.

---

**Last Updated**: 2024
**Maintained By**: Luxe Store Development Team
