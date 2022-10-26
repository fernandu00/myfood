import logo from "./logo.svg";
import "./App.css";
import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import CheckoutDeliveryPage from "./pages/CheckoutDeliveryPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;
