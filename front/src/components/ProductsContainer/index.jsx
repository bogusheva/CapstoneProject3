import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import ProductCard from "../../components/ProductCard";
import { GET_PRODUCTS } from "../../data/databaseApi";
import { REACT_APP_DATABASE_URL } from "../../functions/index";

export default function ProductsContainer() {
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  const [productsData, setProductsData] = useState([]);
  const [initialProductData, setInitialProductData] = useState([]);

  const [categoryArray, setCategoryArray] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [collectionArray, setCollectionArray] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("all");

  const [caffeineArray, setCaffeineArray] = useState([]);
  const [selectedCaffeine, setSelectedCaffeine] = useState("all");

  const [originArray, setOriginArray] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState("all");

  const [numProductsToShow, setNumProductsToShow] = useState(12);

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

  const { data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data?.products) {
      setProductsData(data?.products.data);
      setInitialProductData(data?.products.data);
    }
  }, [data]);

  useEffect(() => {
    const categories = initialProductData.map(
      (item) => item.attributes.category
    );
    const uniqueCategories = [...new Set(categories)];
    const collections = initialProductData.map(
      (item) => item.attributes.collection
    );
    const uniqueCollections = [...new Set(collections)];

    const caffeines = initialProductData.map(
      (item) => item.attributes.caffeine
    );
    const uniqueCaffeines = [...new Set(caffeines)];

    const origins = initialProductData.map((item) => item.attributes.origin);
    const uniqueOrigins = [...new Set(origins)];

    setCategoryArray(uniqueCategories);
    setCollectionArray(uniqueCollections);
    setCaffeineArray(uniqueCaffeines);
    setOriginArray(uniqueOrigins);
  }, [initialProductData]);

  useEffect(() => {
    const sortedCategoryArr =
      selectedCategory === "all"
        ? [...initialProductData]
        : [...initialProductData].filter(
            (item) => item.attributes.category === selectedCategory
          );
    setProductsData(sortedCategoryArr);
  }, [initialProductData, selectedCategory]);

  useEffect(() => {
    const sortedCollectionArr =
      selectedCollection === "all"
        ? [...initialProductData]
        : [...initialProductData].filter(
            (item) => item.attributes.collection === selectedCollection
          );
    setProductsData(sortedCollectionArr);
  }, [initialProductData, selectedCollection]);

  useEffect(() => {
    const sortedCaffeineArr =
      selectedCaffeine === "all"
        ? [...initialProductData]
        : [...initialProductData].filter(
            (item) => item.attributes.caffeine === selectedCaffeine
          );
    setProductsData(sortedCaffeineArr);
  }, [initialProductData, selectedCaffeine]);

  useEffect(() => {
    const sortedOriginArr =
      selectedOrigin === "all"
        ? [...initialProductData]
        : [...initialProductData].filter(
            (item) => item.attributes.origin === selectedOrigin
          );
    setProductsData(sortedOriginArr);
  }, [initialProductData, selectedOrigin]);

  function handleSortPriceAsc() {
    const sortedArr = [...initialProductData].sort((a, b) =>
      parseInt(a.attributes.price) > parseInt(b.attributes.price) ? 1 : -1
    );
    setProductsData(sortedArr);
  }

  function handleSortPriceDesc() {
    const sortedArr = [...initialProductData].sort((a, b) =>
      parseInt(a.attributes.price) < parseInt(b.attributes.price) ? 1 : -1
    );
    setProductsData(sortedArr);
  }

  function handleSortTitleAsc() {
    const sortedArr = [...initialProductData].sort((a, b) =>
      a.attributes.title > b.attributes.title ? 1 : -1
    );
    setProductsData(sortedArr);
  }
  function handleSortTitleDesc() {
    const sortedArr = [...initialProductData].sort((a, b) =>
      a.attributes.title > b.attributes.title ? -1 : 1
    );
    setProductsData(sortedArr);
  }

  function handleSearchProduct(e) {
    const searchProduct = e.target.value;
    const sortedArr = initialProductData.filter((item) =>
      item.attributes.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setProductsData(sortedArr);
  }

  function handleChooseCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function handleChooseCollection(e) {
    setSelectedCollection(e.target.value);
  }

  function handleChooseCaffeine(e) {
    setSelectedCaffeine(e.target.value);
  }

  function handleChooseOrigin(e) {
    setSelectedOrigin(e.target.value);
  }

  function handleShowMoreProducts() {
    setNumProductsToShow(numProductsToShow + 12);
  }

  return (
    <div className="products-block-container">
      <div className="filter-container first">
        <button className="button" onClick={handleSortPriceDesc}>
          MAX <span className="icon-arrow-right"></span> MIN
        </button>
        <button className="button" onClick={handleSortPriceAsc}>
          MIN <span className="icon-arrow-right"></span> MAX
        </button>
        <div>
          <button className="button small" onClick={handleSortTitleAsc}>
            A <span className="icon-arrow-right"></span> Z
          </button>
          <button className="button small" onClick={handleSortTitleDesc}>
            Z <span className="icon-arrow-right"></span> A
          </button>
        </div>
        <input
          type={"search"}
          className="button"
          placeholder={"search tea..."}
          onChange={handleSearchProduct}
        />
      </div>
      <div className="filter-container second">
        <select
          name={selectedCategory}
          id="category-select"
          onChange={handleChooseCategory}
          className="button"
        >
          <option value="all">Choose by category</option>
          {categoryArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          name={selectedCollection}
          id="category-select"
          onChange={handleChooseCollection}
          className="button"
        >
          <option value="all">Choose by collection</option>
          {collectionArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          name={selectedCaffeine}
          id="category-select"
          onChange={handleChooseCaffeine}
          className="button"
        >
          <option value="all">Choose by caffeine</option>
          {caffeineArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          name={selectedOrigin}
          id="category-select"
          onChange={handleChooseOrigin}
          className="button"
        >
          <option value="all">Choose by origin</option>
          {originArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="products-container">
        {productsData.slice(0, numProductsToShow).map(({ id, attributes }) => (
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

      {numProductsToShow < productsData.length && (
        <span className="button" onClick={handleShowMoreProducts}>
          more products
        </span>
      )}
    </div>
  );
}
