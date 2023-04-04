import { Link } from "react-router-dom";

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
