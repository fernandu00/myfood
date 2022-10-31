import React from "react";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import Categories from "../components/Categories";
import { dishes } from "../data";
import Dish from "../components/Dish";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }, []);

  const { amount } = useSelector((store) => store.cart);
  return (
    <main className="main">
      <div className="toolbar">
        <HiMenuAlt1 className="function-icon" />
        <div className="cart-icon-container">
          <Link to="/cart">
            <HiOutlineShoppingCart className="function-icon" />
          </Link>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
      <h3 className="title-main">Comidas deliciosas pra você!</h3>
      <Categories />
      <div className="dishes-container">
        {dishes.map((dish) => {
          return <Dish key={dish.id} {...dish} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
