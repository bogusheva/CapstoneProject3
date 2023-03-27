import { useState, useEffect } from "react";

import ProductItemCart from "../../components/ProductItemCart";
import OrderWindow from "../../components/OrderWindow";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [windowIsVisible, setWindowIsVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartData(JSON.parse(localStorage.getItem("cart")));
    }
  }, [setCartData]);

  function removeItem(id) {
    const newCartData = cartData.filter((item) => item.id !== id);
    setCartData(newCartData);
    localStorage.setItem("cart", JSON.stringify(newCartData));
  }

  function addQuantity(id) {
    setCartData((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    const newCartData = cartData.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(newCartData));
  }

  function subtractQuantity(id) {
    setCartData((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
    const newCartData = cartData.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(newCartData));
  }

  const orderSum = cartData
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="cart-section">
      <div className="cart-hero-container">
        <h1>your order</h1>
      </div>
      <div className="cart-section-container">
        <div className="cart-container">
          {cartData.map((item) => (
            <ProductItemCart
              key={item.id}
              url={`${item.img}`}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              link={`/shop/product${item.id}`}
              removeItem={removeItem}
              addQuantity={addQuantity}
              subtractQuantity={subtractQuantity}
            />
          ))}
        </div>
        <div className="general-sum">
          {cartData.length > 0
            ? `General sum: $${orderSum}`
            : "Please, fill in your cart and come back soon!"}
        </div>
        {cartData.length > 0 && (
          <button
            className="button black"
            onClick={() => setWindowIsVisible(true)}
          >
            Order
          </button>
        )}
        {windowIsVisible && (
          <OrderWindow
            cartData={cartData}
            orderSum={orderSum}
            onClick={() => setWindowIsVisible(false)}
          />
        )}
      </div>
    </section>
  );
}
