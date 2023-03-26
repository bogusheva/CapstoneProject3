import { shipping } from "../../data/shipping";
import QABlock from "../../components/QABlock";

export default function Payment() {
  const shippingBlock = shipping.map((item) => (
    <QABlock key={item.id} {...item} />
  ));

  return (
    <section className="help-section">
      <div className="help-section-container">
        <h1 className="article-heading">Shipping & Returns</h1>
        {shippingBlock}
      </div>
    </section>
  );
}
