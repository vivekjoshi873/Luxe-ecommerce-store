import { Product } from '@/store/useStore';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(
  category?: string,
  limit?: number
): Promise<Product[]> {
  try {
    let url = `${API_BASE_URL}/products`;
    
    if (category && category !== 'all') {
      url = `${API_BASE_URL}/products/category/${category}`;
    }
    
    if (limit) {
      url += `?limit=${limit}`;
    }
    
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const allProducts = await getProducts();
    const lowerQuery = query.toLowerCase();
    
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}

export function filterProducts(
  products: Product[],
  filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'name';
  }
): Product[] {
  let filtered = [...products];
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((p) => p.category === filters.category);
  }
  
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!);
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
  }
  
  if (filters.minRating !== undefined) {
    filtered = filtered.filter((p) => p.rating.rate >= filters.minRating!);
  }
    
  switch (filters.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    case 'name':
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }
  
  return filtered;
}
