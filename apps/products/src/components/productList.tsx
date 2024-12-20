import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './data';

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="list-none">
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <Link
              to={`/products/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
