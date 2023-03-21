import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import ProductCard from "../../components/ProductCard";
import { GET_PRODUCTS } from "../../data/databaseApi";
import { REACT_APP_DATABASE_URL } from "../../functions/index";

export default function ProductsContainer() {
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

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

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="filter-container">
        <button className="button">MAX to MIN</button>
        <button className="button">MIN to MAX</button>
        <button className="button">A-Z</button>
        <button className="button">Z-A</button>
        <input
          type={"search"}
          className="button"
          placeholder={"search tea..."}
        />
      </div>

      <div className="products-container">
        {data?.products.data.map(({ id, attributes }) => (
          <ProductCard
            key={id}
            url={`${REACT_APP_DATABASE_URL}${attributes.img.data[0].attributes.url}`}
            id={id}
            title={attributes.title}
            price={attributes.price}
            link={`/shop/product${id}`}
            cartData={cartData}
            setCartData={setCartData}
            setFavoriteData={setFavoriteData}
            favoriteData={favoriteData}
          />
        ))}
      </div>
    </>
  );
}
