import React from 'react';
import { useAuthStore, useCartStore } from '@shared';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const cartCount = useCartStore((state) => state.items.length);
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className={styles.headerContainer}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart({cartCount})</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};
