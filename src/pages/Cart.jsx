import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../cart/cartSlice';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div id="cart" className="cart-page">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div className="details">
            <h3>{item.name}</h3>
            <p>Rs.{item.price}</p>
            <div className="quantity">
              <button onClick={() => dispatch(removeItem(item))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: Rs.{totalAmount}</h3>
      </div>
      <Link to="/success" className="checkout">Proceed to checkout</Link>
    </div>
    
  
  );
};

export default Cart;
