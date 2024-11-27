import React from 'react';
import './Cart.css'; // Import the CSS file

const Cart = () => {
  // Sample data for cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$99.99', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$89.99', quantity: 2 },
  ];

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: $279.97</h3>
        <button className="btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
