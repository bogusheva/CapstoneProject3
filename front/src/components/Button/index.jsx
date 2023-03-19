import { Link } from "react-router-dom";
import "../../index.scss";

export default function Button({
  link = "./shop",
  className = "button",
  text = "Shop All",
}) {
  return (
    <Link to={link} className={className}>
      {text}
    </Link>
  );
}
