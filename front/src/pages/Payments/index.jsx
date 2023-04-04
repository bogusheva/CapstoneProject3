import { payments } from "../../data/payments";
import QABlock from "../../components/QABlock";

export default function Payment() {
  const paymentsBlock = payments.map((item) => (
    <QABlock key={item.id} {...item} />
  ));

  return (
    <section className="help-section">
      <div className="help-section-container">
        <h1 className="article-heading">Payments</h1>
        <p className="article-text">
          At The Tea<sub>th</sub> Avenue, we accept a variety of payment methods
          to make your shopping experience as convenient as possible. Below you
          will find information about our accepted payment methods, payment
          processing times, and more.
        </p>
        {paymentsBlock}
      </div>
    </section>
  );
}
