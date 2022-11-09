import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItems } from "../../data";
const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  paymentOption: null,
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
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload
      );
      cartItem.quantity = cartItem.quantity - 1;
    },
    remove: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = newItems;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.unit_price * item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
    addItem: (state, action) => {
      const cartItem = action.payload;

      const existsInCart = state.cartItems.find(
        (item) => item._id === cartItem._id
      );
      if (existsInCart) {
        existsInCart.quantity = existsInCart.quantity + 1;
        return;
      }
      const newCartItem = { ...cartItem, quantity: 1 };
      state.cartItems = [...state.cartItems, newCartItem];
    },
    setPayment: (state, action) => {
      state.paymentOption = action.payload;
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
  setPayment,
} = cartSlice.actions;

export default cartSlice.reducer;
