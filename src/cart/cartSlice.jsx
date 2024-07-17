import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const TotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = TotalAmount(state.items);
    },
    removeItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        existingItem.quantity--;
      }
      state.totalAmount = TotalAmount(state.items);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
