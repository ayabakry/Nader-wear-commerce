import React from 'react';
import Product from './Product';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'AngeLo Hoodie',
      description: 'Premium hoodie with gaming-inspired design',
      price: '300',
      image: 'https://naderemad.github.io/nader-wear/images/product1.jpg'
    },
    {
      id: 2,
      name: 'AngeLo T-Shirt',
      description: 'Comfortable cotton t-shirt with unique graphics',
      price: '150',
      image: 'https://naderemad.github.io/nader-wear/images/product1.jpg'
    },
    {
      id: 3,
      name: 'AngeLo Cap',
      description: 'Stylish cap for everyday wear',
      price: '100',
      image: 'https://naderemad.github.io/nader-wear/images/product1.jpg'
    },
    {
      id: 4,
      name: 'AngeLo Jacket',
      description: 'Lightweight jacket perfect for any season',
      price: '400',
      image: 'https://naderemad.github.io/nader-wear/images/product1.jpg'
    }
  ];

  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase tracking-wider">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
