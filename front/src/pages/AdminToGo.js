import React from "react";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import Dish from "../components/Dish";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { filterItems, getMenuItems, test } from "../features/menu/menuSlice";
import Order from "../components/Order";

const AdminToGo = () => {
  const url = "http://192.168.15.14:5000/order";

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const resp = await axios.get(url);
    console.log(resp.data);
    const paid = resp.data.msg.filter(
      (order) => order.paid === true && order.status === "pronto"
    );
    setOrders(paid);
  };

  useEffect(() => {
    const programmedFetching = setInterval(() => {
      fetchOrders();
      console.log("interval");
    }, 10000);

    return () => {
      clearInterval(programmedFetching);
    };
  }, [orders]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateOrderStatus = async (id) => {
    const update = await axios.patch(`${url}/${id}`, {
      status: "entregue",
    });
    fetchOrders();
  };

  const { quantity } = useSelector((store) => store.cart);
  return (
    <main className="main">
      <div className="toolbar">
        {/* <HiMenuAlt1 className="function-icon" />
        <div className="cart-icon-container">
          <Link to="/cart">
            <HiOutlineShoppingCart className="function-icon" />
          </Link>
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div> */}
      </div>
      <h3 className="title-main">PEDIDOS PARA ENTREGA</h3>
      {orders.map((order) => {
        return (
          <article className="orders-admin" key={order._id}>
            <h4>Pedido:{order._id}</h4>
            <p>
              Cliente: <span className="clients-name">{order.user.name}</span>
            </p>
            <ul>
              {order.items.map((item, index) => {
                return (
                  <li key={index}>
                    {" "}
                    <span>{item.quantity} </span>
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <button
              className="btn done"
              onClick={() => updateOrderStatus(order._id)}
            >
              Pedido Entregue!
            </button>
          </article>
        );
      })}
      <Footer />
    </main>
  );
};

export default AdminToGo;
