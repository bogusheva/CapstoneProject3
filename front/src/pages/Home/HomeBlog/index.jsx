import Button from "../../../components/Button";
import "../../../index.scss";

export default function HomeBlog() {
  return (
    <section className="home-blog-section">
      <h2 className="home-section-heading">
        Read our tea blogs{" "}
        <span className="home-section-subheading">
          Read our tea blogs to get updates and know about the trends.
        </span>
      </h2>
      <Button className="button" link={"./blog"} text="Read blog posts" />
    </section>
  );
}
