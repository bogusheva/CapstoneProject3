import Button from "../../../components/Button";

export default function HomeHero({ handleProductScroll }) {
  return (
    <section className="home-hero">
      <h1 className="home-hero-heading">
        Make your tea time best{" "}
        <span>
          With only The Tea<sup>th</sup> Avenue
        </span>
      </h1>
      <Button text="Shop now" />
      <span className="button-scroll" onClick={handleProductScroll}>
        <span className="icon-arrow-down"></span>
      </span>
    </section>
  );
}
