import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import CheckoutDeliveryPage from "./pages/CheckoutDeliveryPage";
import ProfilePage from "./pages/ProfilePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  const { amount, cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch, amount]);

  return (
    <Routes>
      <Route index path="/" element={<InitialPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/checkout" element={<CheckoutDeliveryPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
