import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-holder">
      <Link to="/">
        THE TEA<sup>th</sup> AVENUE
      </Link>
    </div>
  );
}
