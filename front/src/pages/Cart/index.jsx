import { useState, useEffect } from "react";

import ProductItemCart from "../../components/ProductItemCart";

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartData(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  function removeItem(id) {
    const newCartData = cartData.filter((item) => item.id !== id);
    setCartData(newCartData);
    localStorage.setItem("cart", JSON.stringify(newCartData));
  }

  return (
    <section className="cart-section">
      <div className="cart-section-container">
        <h1>your order</h1>
        <div className="cart-container">
          {cartData.map((item) => (
            <ProductItemCart
              key={item.id}
              url={`${item.img}`}
              id={item.id}
              title={item.title}
              price={item.price}
              link={`/shop/product${item.id}`}
              removeItem={removeItem}
            />
          ))}
        </div>
        <div className="general-sum">General sum: $</div>
        <button className="button black">Buy</button>
      </div>
    </section>
  );
}
