import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';

const FoodCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="food-item">
      <img src={item.img} alt={item.name} />
      <div className="details">
        <h3>{item.name}</h3>
        <p>Rs.{item.price}</p>
        <button onClick={() => dispatch(addItem(item))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
