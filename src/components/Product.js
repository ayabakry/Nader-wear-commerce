import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
      {/* <p className="text-gray-300 mb-4">{product.description}</p> */}
      <div className="text-2xl font-bold text-blue-400 mb-4">{product.price} EGP</div>
      <a
        href={`https://wa.me/201020881988?text=I'm interested in ${product.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Buy on WhatsApp
      </a>
    </div>
  );
};

export default Product;
