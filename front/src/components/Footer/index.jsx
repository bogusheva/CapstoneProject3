import { Link, NavLink } from "react-router-dom";

import SubscribeForm from "../SubscribeForm";

import { goUp } from "../../functions";

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
          </div>
          <div className="footer-links">
            <h3>Help&nbsp;Links</h3>
            <ul className="footer-links-list">
              <li>
                <NavLink
                  to={"/faqs"}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Faqs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/privacy-policy"}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Store Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shipping"}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Shipping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/payments"}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Payments
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Social&nbsp;Links</h3>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <p>
          ©2023 Template designed by <b>TemplatesJungle & Olena Bogusheva</b>.
        </p>
      </div>
      <span className="button-scroll reverse" onClick={goUp}>
        <span className="icon-arrow-up"></span>
      </span>
    </footer>
  );
}
