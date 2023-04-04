import { Link } from "react-router-dom";

export default function ProductItemCart(props) {
  const sumItem = props.price * props.quantity;
  return (
    <div className="cart-item">
      <div className="img-holder">
        <img src={props.url} alt={`product ${props.id}`} />
      </div>
      <div className="cart-item-data">
        <div className="cart-item-title">
          <Link to={`/shop/product${props.id}`}>{props.title}</Link>
        </div>
        <div className="cart-item-quantity">
          <span
            className="minus-quantity"
            onClick={() => props.subtractQuantity(props.id)}
          >
            -
          </span>
          <span>{props.quantity}</span>
          <span
            className="plus-quantity"
            onClick={() => props.addQuantity(props.id)}
          >
            +
          </span>
        </div>
        <div className="cart-item-price">${props.price.toFixed(2)}</div>
        <div className="cart-all-price">${sumItem.toFixed(2)}</div>
      </div>
      <div className="button" onClick={() => props.removeItem(props.id)}>
        <span className="icon-bin"></span>
      </div>
    </div>
  );
}
