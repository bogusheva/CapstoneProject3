import { useState, useContext } from "react";

import ContactForm from "../../components/ContactForm";
import ReviewForm from "../../components/ReviewForm";

import AuthContext from "../../context/AuthContext";

export default function Contact() {
  const { isLogged } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState(1);

  function toggleTab(index) {
    setSelectedTab(index);
  }

  return (
    <section className="contact-section">
      <h1>Contact us</h1>
      <div className="contact-container">
        <div className="left-contact">
          <h3>Find us here:</h3>
          <ul className="contacts-holder">
            <li>
              <span className="icon-location"></span>
              <a
                href="https://goo.gl/maps/oQp6NAUUfcLowW7n6"
                target="_blank"
                rel="noopener noreferrer"
              >
                1704 NW Market St, Seattle, WA 98107, USA
              </a>
            </li>
            <li>
              <span className="icon-phone"></span>
              <a href="tel:+0014032168525">+001 403-216-8525</a>
            </li>
            <li>
              <span className="icon-envelop"></span>
              <a href="mailto:contact@theteathavenue.com">
                contact@theteathavenue.com
              </a>
            </li>
            <li>
              <span className="icon-clock"></span>Mon-Sat: 10-6 & Sun: 12-5
            </li>
          </ul>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.796519931804!2d-122.38146344870538!3d47.66894919155965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015c8c1e2cb41%3A0xcf6fed7f2a14516a!2s1704%20NW%20Market%20St%2C%20Seattle%2C%20WA%2098107%2C%20USA!5e0!3m2!1sen!2sua!4v1678815586465!5m2!1sen!2sua"
              height={450}
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              target="_blank"
              referrerPolicy={"no-referrer-when-downgrade"}
              title="store-location"
            ></iframe>
          </div>
        </div>
        <div className="right-contact">
          <h3>Write us:</h3>
          <div className="forms-section">
            <div className="tabs-row">
              <div
                className={selectedTab === 1 ? "button black" : "button"}
                onClick={() => toggleTab(1)}
              >
                Message
              </div>

              {isLogged && (
                <div
                  className={selectedTab === 2 ? "button black" : "button"}
                  onClick={() => toggleTab(2)}
                >
                  Review
                </div>
              )}
            </div>
            <div className="forms-row">
              {selectedTab === 1 && <ContactForm />}
              {isLogged && selectedTab === 2 && <ReviewForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
