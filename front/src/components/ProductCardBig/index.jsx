import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { gql } from "@apollo/client";
import { getAverageRating } from "../../functions/index";
import { REACT_APP_DATABASE_URL } from "../../functions/index";
import ReviewCard from "../ReviewCard";

export default function ProductCardBig() {
  const { id } = useParams();
  const productId = id.slice(7);
  const [photoNumber, setPhotoNumber] = useState(0);
  const [numReviewsToShow, setNumReviewsToShow] = useState(3);

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
      if (favoriteData.find((item) => item.id === productId)) {
        setIsFavorite(true);
      }
    }
  }, []);

  const GET_PRODUCT = gql`
    query GetProducts {
      product(id: ${id.slice(7)}) {
        data {
          id
          attributes {
            title
            description
            category
            caffeine
            origin
            collection
            price
            temperature
            steepTime
            servingSize
            ingredients
            flavor
            img {
              data {
                id
                attributes {
                  url
                  alternativeText
                }
              }
            }
            review {
              data {
                id
                attributes {
                  productTitle
                  name
                  text
                  rating
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const product = data?.product.data.attributes;

  function toggle(number) {
    setPhotoNumber(number);
  }

  function handleShowMoreReviews() {
    setNumReviewsToShow(numReviewsToShow + 3);
  }

  function addToCart() {
    const cartItem = {
      id: productId,
      img: `${REACT_APP_DATABASE_URL}${product.img.data[0].attributes.url}`,
      title: product.title,
      quantity: 1,
      price: product.price,
    };

    if (!cartData.find((item) => item.id === productId)) {
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
      id: productId,
      img: `${REACT_APP_DATABASE_URL}${product.img.data[0].attributes.url}`,
      title: product.title,
      price: product.price,
    };

    if (!favoriteData.find((item) => item.id === productId)) {
      setFavoriteData((prevState) => [...prevState, favoriteItem]);
      setIsFavorite(true);
      localStorage.setItem(
        "favorite",
        JSON.stringify([...favoriteData, favoriteItem])
      );
    } else {
      const newFavoriteData = favoriteData.filter(
        (item) => item.id !== productId
      );
      setIsFavorite(false);
      localStorage.setItem("favorite", JSON.stringify(newFavoriteData));
    }
  }

  return (
    <section className="product-item-page">
      <div className="item-container">
        <div className="item-slider-container">
          <ul className="small-images-container">
            {product.img.data.map((image, index) => (
              <li key={index} onClick={() => toggle(index)}>
                <img
                  src={`${REACT_APP_DATABASE_URL}${image.attributes.url}`}
                  key={image.id}
                  alt={image.id}
                />
              </li>
            ))}
          </ul>
          <div className="main-photo-container">
            <img
              src={`${REACT_APP_DATABASE_URL}${product.img.data[photoNumber].attributes.url}`}
              alt={`product ${photoNumber + 1}`}
            />
            <div className="heart-container" onClick={addToFavorites}>
              {isFavorite ? (
                <span className="icon-heart"></span>
              ) : (
                <span className="icon-heart-broken"></span>
              )}
            </div>
          </div>
        </div>
        <div className="item-description-container">
          <h4>Caffeine: {product.caffeine}</h4>
          <h2>{product.title}</h2>
          <h4>TASTING NOTES: {product.flavor}</h4>
          <p>{product.description}</p>
          <p className="stars-container">
            <span>{getAverageRating(product.review.data)}</span>
            <span>({product.review.data.length})</span>
          </p>

          <span className="button" onClick={addToCart}>
            add to cart <b>$ {product.price.toFixed(2)}</b>
          </span>

          <Link to={`/shop`}>
            <span className="button-left">
              <span className="icon-arrow-left"></span>
            </span>
          </Link>
        </div>
      </div>
      <div className="reviews-container">
        {product.review.data.slice(0, numReviewsToShow).map((review) => (
          <ReviewCard
            key={review.id}
            text={review.attributes.text}
            rating={review.attributes.rating}
            name={review.attributes.name}
          />
        ))}
      </div>
      <div>
        {numReviewsToShow < product.review.data.length && (
          <span className="button" onClick={handleShowMoreReviews}>
            more reviews
          </span>
        )}
      </div>
    </section>
  );
}
