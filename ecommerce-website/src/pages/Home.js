import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Discover the best deals on your favorite products</p>
          <a href="/products" className="btn">Shop Now</a>
        </div>
        <img src="/images/hero-image.jpeg" alt="Hero" className="hero-image" /> {/* Updated image path */}
        
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {/* Example Product 1 */}
          <div className="product-card">
            <img src="/images/feature1.jpeg" alt="Product 1" className="product-image"  loading="lazy" />
            <h3>Men's shirt</h3>
            <p>$99.99</p>
          </div>
          {/* Example Product 2 */}
          <div className="product-card">
          <img 
  src="/images/feature2.jpeg" 
  alt="Product 2" 
  className="product-image"  
  loading="lazy"
  style={{
    width: '250px', // Adjust width as needed
    height: '300px', // Maintain aspect ratio
    display: 'block', // Ensure it's treated as a block element
    marginBottom: '10px' // Space below the image for name and price
  }} 
/>
<h3  style={{
    marginTop: '40px'
  }}>Decoration piece</h3>
            <p>$99.99</p>
          </div>
          {/* Example Product 3 */}
          <div className="product-card">
            <img src="/images/B1.jpg" alt="Product 3" className="product-image"  loading="lazy"  style={{
    width: '250px', // Adjust width as needed
    height: '300px', // Maintain aspect ratio
    display: 'block', // Ensure it's treated as a block element
    marginBottom: '10px' // Space below the image for name and price
  }} />
            <h3  style={{
    marginTop: '40px'
  }}>Hand Bags</h3>
            <p>$99.99</p>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
         <h2>Special Offer</h2>
        <p>Get 50% off on selected items</p>
        <a href="/products" className="btn">Shop Now</a>
      </section>
    </div>
  );
};

export default Home;
