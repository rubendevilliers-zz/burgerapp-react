import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action === "ADD_ITEM") {
    const updatedItems = state.items.concat();
    const updatedTotalAmount =
      state.total + action.item.price * action.item.amount;
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
