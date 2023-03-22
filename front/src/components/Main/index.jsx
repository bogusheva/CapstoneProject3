import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Favorites from "../../pages/Favorites";
import Cart from "../../pages/Cart";
import Faqs from "../../pages/Faqs";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Shipping from "../../pages/Shipping";
import Payments from "../../pages/Payments";
import NotFound from "../../pages/NotFound";
import BlogPage from "../BlogPage";
import IntroBlogArticle from "../IntroBlogArticle";
import Article from "../Article";
import ProductCardBig from "../ProductCardBig/";
import ProductsContainer from "../ProductsContainer";
import BlogThemeContainer from "../BlogThemeContainer";

import { blogContent } from "../../data/articles";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<ProductsContainer />} />
          <Route path=":id" element={<ProductCardBig />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/blog" element={<Blog blogContent={blogContent} />}>
          <Route index element={<IntroBlogArticle />} />
          <Route
            path=":blogTheme/*"
            element={<BlogPage blogContent={blogContent} />}
          >
            <Route
              index
              element={<BlogThemeContainer blogContent={blogContent} />}
            />
            <Route path=":articleId" element={<Article />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
