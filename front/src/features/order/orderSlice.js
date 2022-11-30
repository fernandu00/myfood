import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const { cartItems, amount, total } = useSelector((store) => store.cart);

const initialState = {
  user: null,
  items: cartItems,
  amount: amount,
  total: total,
  paymentChoice: null,
};

// const url = "http://localhost:5000/order";

const url = "http://192.168.15.14:5000/order";

export const getOrder = createAsyncThunk("order/getOrder", async () => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state) => {},
  },
  extraReducers: {
    [getMenuItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getMenuItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.menuItems = action.payload;
      const cat = state.menuItems.map((item) => item.category);
      state.categories = ["todos", ...new Set(cat)];
      state.filteredItems = state.menuItems;
    },
    [getMenuItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
