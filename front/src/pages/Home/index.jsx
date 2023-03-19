import { useRef } from "react";
import HomeHero from "./HomeHero";
import HomeSliderSection from "./HomeSliderSection";
import HomeChoice from "./HomeChoice";
import HomeReviews from "./HomeReviews";
import HomeVideo from "./HomeVideo";
import HomeBlog from "./HomeBlog";
import HomeInstagram from "./HomeInstagram";
import { bestsellers } from "../../data/bestsellers.js";
import { trends } from "../../data/trends.js";

import "../../index.scss";
import HomeAdvantages from "./HomeAdvantages";

export default function Home() {
  const productsRef = useRef(null);
  function handleProductScroll() {
    productsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <main>
      <HomeHero handleProductScroll={handleProductScroll} />
      <HomeSliderSection
        heading="What's trending"
        subheading="These are the items that are trending recently."
        array={trends}
        ref={productsRef}
      />
      <HomeChoice />
      <HomeReviews />
      <HomeVideo />
      <HomeSliderSection
        heading="BestSellers"
        subheading="These are the items that are best seller."
        array={bestsellers}
      />
      <HomeBlog />
      <HomeAdvantages />
      <HomeInstagram />
    </main>
  );
}
