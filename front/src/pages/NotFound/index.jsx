import Button from "../../components/Button";

export default function NotFound() {
  return (
    <section className="help-section not-found">
      <div className="help-section-container not-found">
        <h1 className="article-heading">The page is not&nbsp;found</h1>
        <h3 className="article-subheading not-found">
          Please check if the link is correct.
          <br /> To return to the main page, click
        </h3>
        <Button link="./" className="button black" text="here" />
      </div>
    </section>
  );
}
