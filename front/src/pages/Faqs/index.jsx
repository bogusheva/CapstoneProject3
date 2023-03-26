import { faqs } from "../../data/faqs";

import QABlock from "../../components/QABlock";

export default function Faqs() {
  const faqsBlock = faqs.map((item) => <QABlock key={item.id} {...item} />);
  return (
    <section className="help-section">
      <div className="help-section-container">
        <h1 className="article-heading">FAQS (frequently asked questions)</h1>
        {faqsBlock}
      </div>
    </section>
  );
}
