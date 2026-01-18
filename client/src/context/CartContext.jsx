import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axiosInstance from '../utils/axiosConfig';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const isLoggedIn = () => {
    return !!localStorage.getItem('token');
  };

  const fetchCart = useCallback(async () => {
    if (!isLoggedIn()) {
      setCartItems([]);
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.get('/cart');
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
    
    // Listen for storage changes (login/logout)
    const handleStorageChange = () => {
      fetchCart();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [fetchCart]);

  const addToCart = async (product) => {
    if (!isLoggedIn()) {
      throw new Error('You must log in to add items to cart.');
    }

    try {
      await axiosInstance.post('/cart/add', {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      await fetchCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axiosInstance.delete(`/cart/remove/${productId}`);
      await fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      await axiosInstance.delete('/cart/clear');
      await fetchCart();
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  const value = {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    clearCart,
    fetchCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

