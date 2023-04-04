import { privacyPolicy } from "../../data/privacy-policy";

import QABlock from "../../components/QABlock";

export default function PrivacyPolicy() {
  const privacyPolicyBlock = privacyPolicy.map((item) => (
    <QABlock key={item.id} {...item} />
  ));

  return (
    <section className="help-section">
      <div className="help-section-container">
        <h1 className="article-heading">Privacy policy</h1>
        <p className="article-text">
          This Privacy Policy governs the manner in which The Tea<sup>th</sup>{" "}
          Avenue collects, uses, maintains and discloses information collected
          from users (each, a “User”) of the www.theteathavenue.com website
          (“Site”). This privacy policy applies to the Site and all products and
          services offered by theteathavenue.com
        </p>
        {privacyPolicyBlock}
      </div>
    </section>
  );
}
