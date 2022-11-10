import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Dish from "../components/Dish";
import Order from "../components/Order";

const OrderPagePaid = () => {
  const { id } = useParams();
  const [currentOrder, setCurrentOrder] = useState("");
  //   const url = "http://localhost:5000/order";

  const url = "http://192.168.15.14:5000/order";

  // update order's paid status to true
  useEffect(() => {
    const updatePaidStatus = async () => {
      const resp = await axios.patch(`${url}/${id}`, {
        paid: true,
      });
      console.log(resp.data);
    };
    updatePaidStatus();
  }, []);

  //   fetch Order data
  useEffect(() => {
    const fetchOrder = async () => {
      const resp = await axios.get(`${url}/${id}`);
      setCurrentOrder(resp.data.msg);
      console.log(resp.data.msg);
    };
    fetchOrder();
  }, []);

  const { status, total } = currentOrder;

  return (
    <main className="single-order-main">
      <div className="container">
        <Link to="/main">
          <FaChevronLeft className="chevron" />
        </Link>
      </div>

      {/* <img src={picture} alt={title} /> */}
      <div className="info">
        <h2>Pedido Recebido!</h2>
        <h3>
          status: <span style={{ color: "green" }}>{status}</span>
        </h3>
        <h4>Items</h4>
      </div>
      {currentOrder &&
        currentOrder.items.map((item) => {
          return <Order key={item._id} {...item} />;
          //   return (
          //     <article>
          //       {/* <img className="dish-img" src={item.picture} alt={item.title} /> */}
          //       <div className="item-container">
          //         <span className="dish-name">
          //           {item.quantity}- {item.title}
          //         </span>{" "}
          //         <span className="dish-price">R$ {item.unit_price}</span>
          //       </div>

          //       {/* <p className="product-desc">{item.desc}</p> */}
          //     </article>
          //   );
        })}
      <hr />
      <div className="item-container">
        <span style={{ fontWeight: "bold" }}>Total</span>
        <span style={{ fontWeight: "bold" }}>R${total.toFixed(2)}</span>
      </div>
    </main>
  );
};

export default OrderPagePaid;
