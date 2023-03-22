import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-item">
      <div className="img-holder">
        <img src={props.url} alt={`product ${props.id}`} />
      </div>
      <Link to={props.link}>
        <h3 className="product-title">{props.title}</h3>
      </Link>
      <h4 className="product-price">${props.price.toFixed(2)}</h4>
    </div>
  );
}
