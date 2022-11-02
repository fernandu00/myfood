import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RiContactsBookLine } from "react-icons/ri";

const initialState = {
  menuItems: [],
  currentItem: null,
  isLoading: false,
};

const url = "http://localhost:5000/menu/all";

export const getMenuItems = createAsyncThunk("menu/getMenuItems", async () => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
  extraReducers: {
    [getMenuItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getMenuItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.menuItems = action.payload;
    },
    [getMenuItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setCurrentItem } = menuSlice.actions;

export default menuSlice.reducer;
