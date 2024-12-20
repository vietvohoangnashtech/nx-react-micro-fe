import ProductDetail from '../components/productDetail';
import ProductList from '../components/productList';
import { Route, Routes } from 'react-router-dom';
import '../styles.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
