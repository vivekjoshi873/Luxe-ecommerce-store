import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  
  favorites: number[];
  toggleFavorite: (productId: number) => void;
  
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  
  cartTotal: () => number;
  cartItemsCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter((item) => item.id !== productId)
              : state.cart.map((item) =>
                  item.id === productId ? { ...item, quantity } : item
                ),
        })),
      clearCart: () => set({ cart: [] }),
      
      favorites: [],
      toggleFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites.filter((id) => id !== productId)
            : [...state.favorites, productId],
        })),
      
      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      
      cartTotal: () => {
        const state = get();
        return state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      cartItemsCount: () => {
        const state = get();
        return state.cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'ecommerce-store',
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
      }),
    }
  )
);
