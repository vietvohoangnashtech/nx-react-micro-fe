import { useCartStore } from '@shared';
import styles from './app.module.scss';

export function App() {
  const cartCount = useCartStore((state) => state.items.length);

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      <p>Total items in cart: {cartCount}</p>
      <p>Your cart is empty.</p>
    </div>
  );
}

export default App;
