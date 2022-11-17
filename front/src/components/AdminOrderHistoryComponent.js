import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Order from "./Order";

const AdminOrderHistoryComponent = () => {
  const { uuid } = useSelector((store) => store.user);
  //   const url = "http://localhost:5000/order/uuid";

  const url = "http://192.168.15.14:5000/order";

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const resp = await axios.get(url);
      console.log(resp.data);
      const delivered = resp.data.msg.filter(
        (order) => order.status === "entregue"
      );
      setOrders(delivered);
      console.log(delivered);
    };
    fetchOrders();
  }, []);

  return (
    <section className="address">
      <div className="adress-details">
        <h3>Pedidos Concluídos</h3>
      </div>
      <div className="adress-info">
        {orders.map((order) => {
          return (
            <article key={order._id}>
              <h5>Pedido: {order._id}</h5>
              <h5>Cliente: {order.user.name}</h5>
              <h5>
                Endereço: {order.user.address.line_1},{" "}
                {order.user.address.line_2}, {order.user.address.number}
              </h5>

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

export default AdminOrderHistoryComponent;
