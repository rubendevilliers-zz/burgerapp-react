import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import buttonClasses from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ openCart }) => {
  const cartCtx = useContext(CartContext);

  const currentCartNumber = cartCtx.items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);

  return (
    <button className={buttonClasses.button} onClick={openCart}>
      <span className={buttonClasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={buttonClasses.badge}>{currentCartNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
