import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItems } from "../../data";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
    remove: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = newItems;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
    addItem: (state, action) => {
      const cartItem = action.payload;

      const existsInCart = state.cartItems.find(
        (item) => item._id === cartItem._id
      );
      if (existsInCart) {
        existsInCart.amount = existsInCart.amount + 1;
        return;
      }
      const newCartItem = { ...cartItem, amount: 1 };
      state.cartItems = [...state.cartItems, newCartItem];
    },
  },
});

export const {
  clearCart,
  increase,
  decrease,
  remove,
  calculateTotals,
  addItem,
} = cartSlice.actions;

export default cartSlice.reducer;
