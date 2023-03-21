import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductItemCart(props) {
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity((prevState) => prevState + 1);
  }
  function subtractQuantity() {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  }

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
          <span className="minus-quantity" onClick={subtractQuantity}>
            -
          </span>
          <span>{quantity}</span>
          <span className="plus-quantity" onClick={addQuantity}>
            +
          </span>
        </div>
        <div className="cart-item-price">${props.price.toFixed(2)}</div>
        <div className="cart-all-price">
          ${props.price.toFixed(2) * quantity}
        </div>
      </div>
      <div className="button" onClick={() => props.removeItem(props.id)}>
        Remove
      </div>
    </div>
  );
}
