import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RiContactsBookLine } from "react-icons/ri";

const initialState = {
  menuItems: [],
  currentItem: null,
  categories: ["todos"],
  filteredItems: [],
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
    filterItems: (state, action) => {
      if (action.payload === "todos".toLowerCase()) {
        let menu = state.menuItems;
        state.filteredItems = menu;
        return;
      }
      const filtered = state.menuItems.filter(
        (item) => item.category === action.payload
      );
      state.filteredItems = filtered;
    },
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

export const { setCurrentItem, filterItems } = menuSlice.actions;

export default menuSlice.reducer;
