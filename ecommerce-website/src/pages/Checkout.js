import React from 'react';
import './Checkout.css'; // Import the CSS file

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Enter your address" required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Enter your city" required />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input type="text" placeholder="Enter your postal code" required />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" placeholder="Enter your country" required />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select required>
            <option value="">Select payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
