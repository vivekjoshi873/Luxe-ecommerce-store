# 🛍️ Luxe Store - Premium eCommerce Experience

A stunning, high-performance eCommerce website built with Next.js 15, React, Tailwind CSS, Framer Motion, and Three.js.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-blue?style=for-the-badge&logo=vercel)](https://luxe-ecommerce-store.vercel.app/)

![Luxe Store](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop)

---

## 🌐 Live Demo

**🚀 [Visit Live Site](https://luxe-ecommerce-store.vercel.app/)**

Experience the full eCommerce functionality:
- Browse products with 3D visuals
- Add items to cart and favorites
- Test the search and filtering
- Explore the responsive design
- Try the dark/light mode toggle

---

## ✨ Features

### 🎨 Design
- **Premium UI**: Minimalist, modern design inspired by Apple, Nike, and Shopify
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive**: Perfect on mobile, tablet, and desktop
- **Animations**: Smooth Framer Motion animations and micro-interactions
- **3D Visuals**: Optional Three.js 3D product viewer on hero section

### 🛒 eCommerce Features
- **Product Grid**: Filterable by category, price, and rating
- **Search Bar**: Debounced typeahead search with instant results
- **Product Details**: Image carousel with zoom, reviews, specifications
- **Shopping Cart**: Sliding sidebar with quantity controls
- **Favorites**: Save products to wishlist
- **Checkout**: Stripe-ready payment form structure

### ⚡ Performance
- **Next.js 15**: App Router with Server Components
- **Lazy Loading**: Optimized image loading with Next.js Image
- **Code Splitting**: Dynamic imports for heavy components
- **API Optimization**: Debounced search, client-side filtering
- **SEO Optimized**: Dynamic metadata, JSON-LD schema, alt texts

### 🔧 Technical Stack
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS v4
- **Components**: Shadcn/UI
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **State Management**: Zustand with localStorage persistence
- **Theme**: next-themes
- **API**: FakeStoreAPI (demo data)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. **Install dependencies**
```bash
npm install
# or
bun install
```

2. **Run development server**
```bash
npm run dev
# or
bun dev
```

3. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
luxe-store/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Homepage
│   │   ├── products/[id]/     # Product detail pages
│   │   ├── checkout/          # Checkout page
│   │   └── favorites/         # Favorites page
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn/UI components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero3D.tsx        # 3D hero section
│   │   ├── ProductCard.tsx   # Product card component
│   │   ├── ProductGrid.tsx   # Product grid with filters
│   │   ├── SearchBar.tsx     # Search with typeahead
│   │   ├── CartSidebar.tsx   # Shopping cart sidebar
│   │   └── ...
│   ├── store/                # State management
│   │   └── useStore.ts       # Zustand store
│   ├── lib/                  # Utilities
│   │   └── api.ts           # API functions
│   ├── hooks/               # Custom React hooks
│   │   └── useDebounce.ts   # Debounce hook
│   └── styles/
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── PERFORMANCE_OPTIMIZATION.md
└── README.md
```

---

## 🎯 Key Components

### Header
- Responsive navigation
- Cart badge with item count
- Theme toggle (dark/light mode)
- Favorites counter

### Hero3D
- Three.js 3D product viewer
- Auto-rotating animation
- Interactive camera controls
- Responsive design

### ProductGrid
- Category filtering
- Sort by price, rating, name
- Smooth stagger animations
- Loading skeletons

### SearchBar
- Debounced typeahead (300ms)
- Instant search results
- Keyboard navigation
- Click-outside to close

### ProductCard
- Hover animations
- Quick add to cart
- Favorite toggle
- Star rating display

### CartSidebar
- Slide-in animation
- Quantity controls
- Remove items
- Price summary
- Smooth transitions

### Checkout
- Multi-step form
- Stripe-ready structure
- Order summary
- Security badges

---

## 🔌 API Integration

### Current: FakeStoreAPI
The app uses [FakeStoreAPI](https://fakestoreapi.com) for demo data.

**Endpoints used:**
- `GET /products` - All products
- `GET /products/{id}` - Single product
- `GET /products/categories` - Categories
- `GET /products/category/{category}` - Products by category

### Production: Replace with your API
Update `src/lib/api.ts` with your backend API:

```tsx
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
}
```

---

## 💳 Stripe Integration

The checkout page is **Stripe-ready**. To integrate:

1. **Install Stripe packages**
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

2. **Set up environment variables**
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_secret
```

3. **Wrap checkout with Stripe provider**
```tsx
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

<Elements stripe={stripePromise}>
  <CheckoutForm />
</Elements>
```

4. **Replace card inputs with Stripe Elements**
```tsx
import { CardElement } from '@stripe/react-stripe-js';

<CardElement />
```

---

## 🎨 Customization

### Colors & Theme
Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}
```

### Components
All components are modular and can be easily customized:
- Modify Tailwind classes for styling
- Adjust animations in Framer Motion props
- Update 3D models in Hero3D component

---

## 📊 Performance

See [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md) for detailed optimization guide.

### Metrics
- ⚡ **LCP**: < 2.5s
- ⚡ **FID**: < 100ms
- ⚡ **CLS**: < 0.1
- 📦 **Bundle Size**: ~250kb (gzipped)

### Key Optimizations
- Next.js Image optimization
- Lazy loading images
- Debounced search
- Client-side filtering
- Code splitting
- Static generation
- API caching

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 📝 Features Completed

✅ Premium minimalist design with dark/light mode  
✅ Animated hero section with Three.js 3D product viewer  
✅ Product grid with category filters and sorting  
✅ Debounced search with typeahead functionality  
✅ Product detail pages with image carousel and zoom  
✅ Shopping cart sidebar with smooth animations  
✅ Favorites/wishlist system  
✅ Stripe-ready checkout page  
✅ Responsive design (mobile, tablet, desktop)  
✅ SEO optimization (metadata, JSON-LD schema, alt texts)  
✅ Performance optimizations (lazy loading, code splitting)  
✅ State management with Zustand  
✅ Smooth Framer Motion animations  
✅ Custom Tailwind utilities (shadows, gradients, glow effects)  

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, React, and modern web technologies.**