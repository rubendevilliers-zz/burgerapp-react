import React from "react";
import cartStyles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ closeCart }) => {
  const cartItems = [
    {
      id: 1,
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ].map((item) => {
    return <li>{item.name}</li>;
  });
  return (
    <Modal>
      <ul className={cartStyles["cart-items"]}>{cartItems}</ul>
      <div className={cartStyles.total}>
        <span>Total amount</span>
        <span>35.99</span>
      </div>
      <div className={cartStyles.actions}>
        <button className={cartStyles["button--alt"]} onClick={closeCart}>
          Close
        </button>
        <button className={cartStyles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
