import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file

const ProductDetails = () => {
  const { id } = useParams();

  // Sample data for products
  const products = [
    { id: 1, name: 'Mens shirt', price: '$99.99', description: 'This is a high-quality men\'s shirt.', image: '/images/feature1.jpeg' },
    { id: 2, name: 'Decoration piece', price: '$89.99', description: 'A beautiful decoration piece for your home.', image: '/images/feature2.jpeg' },
    { id: 3, name: 'Hand bags', price: '$79.99', description: 'Stylish and practical hand bags.', image: '/images/B1.jpg' },
  ];

  // Find the product that matches the ID from the URL
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
