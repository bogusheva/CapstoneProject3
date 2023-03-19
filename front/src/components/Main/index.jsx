import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import Blog from "../../pages/Blog";
import BlogPage from "../BlogPage";
import IntroBlogArticle from "../IntroBlogArticle";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Faqs from "../../pages/Faqs";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Shipping from "../../pages/Shipping";
import Payments from "../../pages/Payments";
import NotFound from "../../pages/NotFound";
import Article from "../Article";

import { blogContent } from "../../data/articles";

import "../../index.scss";
import BlogThemeContainer from "../BlogThemeContainer";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
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
