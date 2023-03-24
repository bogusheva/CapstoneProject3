import { useQuery } from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import { gql } from "@apollo/client";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import WeatherDescription from "../WeatherDescription";
import ProductCard from "../ProductCard";
import Mug from "../../assets/images/advantage2.svg";
import { REACT_APP_DATABASE_URL } from "../../functions/index";
import { quotesArray } from "../../data/quotes.js";

export default function WeatherBlock() {
  const [city, setCity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState("Find out what we have for you...");
  const [productId, setProductId] = useState("1");
  const [dataWeather, setDataWeather] = useState({
    temperature: null,
    description: "",
    humidity: null,
    wind: null,
    icon: "",
    city: "",
  });

  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const { isLogged } = useContext(AuthContext);

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

  useEffect(() => {
    if (favoriteData.find((item) => item.id === productId)) {
      setIsFavorite(true);
    }
  }, [favoriteData, productId]);

  const GET_PRODUCT = gql`
    query GetProduct {
      product(id: ${productId}) {
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
            review(sort: "createdAt:desc", pagination: { limit: 240 }) {
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
  const product = data?.product.data;

  function handleChangeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "f97f8eaebc5efe3fd907c0565c3a9148";
    let units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showData);
    setCity("");
  }

  function showData(response) {
    setIsLoaded(true);
    setDataWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
    switch (response.data.weather[0].description) {
      case "rainy":
        setQuote(quotesArray[0]);
        setProductId(Math.round(Math.random() * 10));
        break;
      case "few clouds":
        setQuote(quotesArray[1]);
        setProductId(Math.round(Math.random() * 10 + 10));
        break;
      case "scattered clouds":
        setQuote(quotesArray[2]);
        setProductId(Math.round(Math.random() * 10 + 20));
        break;
      case "overcast clouds":
        setQuote(quotesArray[3]);
        setProductId(Math.round(Math.random() * 10 + 0));
        break;
      case "clear sky":
        setQuote(quotesArray[4]);
        setProductId(Math.round(Math.random() * 10 + 10));
        break;
      default:
        setQuote(quotesArray[5]);
        setProductId(Math.round(Math.random() * 30));
        break;
    }
  }

  return (
    <div className="weather-choice-container">
      <div className="weather-block-container">
        <h3>
          {!isLoaded
            ? "Enter your city and we'll choose tea for your weather"
            : `The weather in ${dataWeather.city}`}
        </h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder={"enter a city..."}
            onChange={handleChangeCity}
            value={city}
            className="search-input"
          />
          <input type="submit" value="Search" className="button" />
        </form>
        {isLoaded ? (
          <WeatherDescription data={dataWeather} />
        ) : (
          <div className="weather-description-block">
            <div className="mug-icon">
              <img src={Mug} alt="surprise" />
            </div>
          </div>
        )}
        <blockquote>
          <h3>{quote}</h3>
        </blockquote>
      </div>
      <div className="surprise-item-container">
        <div className="item-container">
          {isLoaded ? (
            <ProductCard
              key={product.id}
              url={`${REACT_APP_DATABASE_URL}${product.attributes.img.data[0].attributes.url}`}
              id={product.id}
              title={product.attributes.title}
              price={product.attributes.price}
              link={`/shop/product${product.id}`}
              cartData={cartData}
              setCartData={setCartData}
              setFavoriteData={setFavoriteData}
              favoriteData={favoriteData}
            />
          ) : (
            <div className="mug-icon">
              <img src={Mug} alt="surprise" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
