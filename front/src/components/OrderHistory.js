import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Order from "./Order";
const OrderHistory = () => {
  const { uuid } = useSelector((store) => store.user);
  //   const url = "http://localhost:5000/order/uuid";

  const url = "http://192.168.15.14:5000/order/uuid";

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const resp = await axios.get(url, uuid);
      console.log(resp.data);
      setOrders(resp.data.msg);
    };
    fetchOrders();
  }, []);

  return (
    <section className="address">
      <div className="adress-details">
        <h3>Histórico de Pedidos</h3>
      </div>
      <div className="adress-info">
        {orders.map((order) => {
          return (
            <article key={order._id}>
              <h4>Items</h4>

              {/*  changed to map over an Order Component*/}
              {order.items.map((item) => {
                return <Order key={item._id} {...item} />;
              })}

              {/* {order.items.map((item, index) => (
                <li className="order-history-items" key={index}>
                  {item.title} <span> R$ {item.price}</span>
                </li>
              ))} */}

              <hr />
              <p className="order-history-items">
                <span>
                  <strong> Total :</strong>
                </span>
                <strong> {order.total.toFixed(2)}</strong>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OrderHistory;
