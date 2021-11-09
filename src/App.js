import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart closeCart={closeCartHandler} />}
      <Header openCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
