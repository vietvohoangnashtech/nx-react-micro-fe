import { useCartStore } from '@shared';
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './data';

const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // Mock product details

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="mb-4">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetail;
