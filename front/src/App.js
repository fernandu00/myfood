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
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrdersPage from "./pages/OrdersPage";
import { setUser } from "./features/user/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import OrderPagePaid from "./pages/OrderPagePaid";
function App() {
  const dispatch = useDispatch();
  const { amount, cartItems } = useSelector((store) => store.cart);

  // update cart total
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch, amount]);

  useEffect(() => {
    const checkUser = async () => {
      const auth = getAuth();
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(setUser({ isLogged: true }));
          console.log(user);
        }
      });
    };
    checkUser();
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route index path="/" element={<InitialPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutDeliveryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route path="/paid/:id" element={<OrderPagePaid />} />
      </Routes>
    </>
  );
}

export default App;
