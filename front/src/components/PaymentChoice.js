import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "./../features/cart/cartSlice";
const PaymentChoice = () => {
  const { PaymentChoice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <section className="address payment">
      <div className="adress-details">
        <h3>Forma de pagamento</h3>
      </div>
      <div className="adress-info">
        <p>
          <input
            type="radio"
            name="payment"
            id="pix"
            value={PaymentChoice}
            onChange={() => dispatch(setPayment("pix"))}
          />
          <label htmlFor="pix"> Pix</label>
        </p>
        <p>
          <input
            type="radio"
            name="payment"
            id="cartao"
            value={PaymentChoice}
            onChange={() => dispatch(setPayment("cartao"))}
          />
          {""} Cartão
        </p>
      </div>
    </section>
  );
};

export default PaymentChoice;
