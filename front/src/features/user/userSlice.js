import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { toast } from "react-toastify";
import app from "../../firebase";

const initialState = {
  name: null,
  email: null,
  password: null,
  checkpasswd: null,
  isLogged: false,
  uuid: null,
  isAdmin: false,
  address: null,
  address2: null,
  houseNumber: null,
  zipCode: null,
  phoneNumber: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      if (payload.name) {
        state.name = payload.name;
      }
      if (payload.email) {
        state.email = payload.email;
      }
      if (payload.password) {
        state.password = payload.password;
      }
      if (payload.checkpasswd) {
        state.checkpasswd = payload.checkpasswd;
      }
      if (payload.isLogged) {
        state.isLogged = payload.isLogged;
      }
      if (payload.uuid) {
        state.uuid = payload.uuid;
      }
      if (payload.isAdmin) {
        state.isAdmin = payload.isAdmin;
      }
      if (payload.address) {
        state.address = payload.address;
      }
      if (payload.address2) {
        state.address2 = payload.address2;
      }
      if (payload.houseNumber) {
        state.houseNumber = payload.houseNumber;
      }
      if (payload.phoneNumber) {
        state.phoneNumber = payload.phoneNumber;
      }
      if (payload.address) {
        state.address = payload.address;
      }
      if (payload.zipCode) {
        state.zipCode = payload.zipCode;
      }
    },
  },
});

export const { setUser, submitUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
