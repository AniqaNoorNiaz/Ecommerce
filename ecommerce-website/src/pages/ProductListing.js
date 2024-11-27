import React from 'react';
import './ProductListing.css'; // Import the CSS file

const ProductListing = () => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Mens shirt', price: '$99.99', image: '/images/feature1.jpeg' },
    { id: 2, name: 'Decoration piece', price: '$89.99', image: '/images/feature2.jpeg' },
    { id: 3, name: 'Hand bags', price: '$79.99', image: '/images/B1.jpg' },
  ];

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href={`/products/${product.id}`} className="btn">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
