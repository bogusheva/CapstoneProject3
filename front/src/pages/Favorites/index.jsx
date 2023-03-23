import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function Favorites() {
  const [favoriteData, setFavoriteData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartData(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("favorite")) {
      setFavoriteData(JSON.parse(localStorage.getItem("favorite")));
    }
  }, []);

  return (
    <section className="favorites-section">
      <div className="favorites-hero-container">
        <h1>Your Favorites</h1>
      </div>
      <div className="favorites-section-container">
        <div className="favorites-container">
          {favoriteData.map((item) => (
            <ProductCard
              key={item.id}
              url={`${item.img}`}
              id={item.id}
              title={item.title}
              price={item.price}
              link={`/shop/product${item.id}`}
              favoriteData={favoriteData}
              setFavoriteData={setFavoriteData}
              cartData={cartData}
              setCartData={setCartData}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
