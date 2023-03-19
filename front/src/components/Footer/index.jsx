import { Link } from "react-router-dom";
import SubscribeForm from "../SubscribeForm";
import { goUp } from "../../functions";
import "../../index.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main-block">
        <div className="subscribe-block">
          <h2 className="subscribe-block-heading">
            Know our The&nbsp;Tea<sup>th</sup>&nbsp;Avenue
          </h2>
          <p className="subscribe-block-text">
            We are the best tea supplier in the town. Our main motive is to make
            our beautiful people stay fit & healthy everytime.
          </p>
          <SubscribeForm />
        </div>
        <div className="links-block">
          <div className="footer-links">
            <h3>Quick&nbsp;links</h3>
            <ul>
              <ul className="footer-links-list">
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Help&nbsp;Links</h3>
            <ul>
              <ul className="footer-links-list">
                <li>
                  <Link to="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Store Policy</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping</Link>
                </li>
                <li>
                  <Link to="/payments">Payments</Link>
                </li>
              </ul>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Social&nbsp;links</h3>
            <ul>
              <ul className="footer-links-list">
                <li>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <p>
          ©2022 Template designed by <b>TemplatesJungle</b>.
        </p>
      </div>
      <span className="button-scroll reverse" onClick={goUp}>
        <span className="icon-arrow-up"></span>
      </span>
    </footer>
  );
}
