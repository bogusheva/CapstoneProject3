import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartData(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("favorite")) {
      setFavoriteData(JSON.parse(localStorage.getItem("favorite")));
      if (favoriteData.find((item) => item.id === props.id)) {
        setIsFavorite(true);
      }
    }
  }, []);

  function addToCart() {
    const cartItem = {
      id: props.id,
      img: props.url,
      title: props.title,
      quantity: 1,
      price: props.price,
    };

    if (!cartData.find((item) => item.id === props.id)) {
      setCartData((prevState) => [...prevState, cartItem]);
      setIsFavorite(false);
      localStorage.setItem("cart", JSON.stringify([...cartData, cartItem]));
    }
  }

  function addToFavorites() {
    if (localStorage.getItem("favorite")) {
      setFavoriteData(JSON.parse(localStorage.getItem("favorite")));
    }
    const favoriteItem = {
      id: props.id,
      img: props.url,
      title: props.title,
      price: props.price,
    };

    if (!favoriteData.find((item) => item.id === props.id)) {
      setFavoriteData((prevState) => [...prevState, favoriteItem]);
      setIsFavorite(true);
      localStorage.setItem(
        "favorite",
        JSON.stringify([...favoriteData, favoriteItem])
      );
    } else {
      const newFavoriteData = favoriteData.filter(
        (item) => item.id !== props.id
      );
      setIsFavorite(false);
      localStorage.setItem("favorite", JSON.stringify(newFavoriteData));
    }
  }

  return (
    <div className="product-item">
      <div className="img-holder">
        <img src={props.url} alt={`product ${props.id}`} />
        <div className="heart-container" onClick={addToFavorites}>
          {isFavorite ? (
            <span className="icon-heart"></span>
          ) : (
            <span className="icon-heart-broken"></span>
          )}
        </div>
        <div className="cart-container" onClick={addToCart}>
          <span className="icon-cart"></span>
        </div>
      </div>
      <Link to={props.link}>
        <h3 className="product-title">{props.title}</h3>
      </Link>
      <h4 className="product-price">${props.price.toFixed(2)}</h4>
    </div>
  );
}
