import "../../index.scss";

export default function ProductCard(props) {
  return (
    <div className="product-item">
      <div className="img-holder">
        <img src={props.url} alt={`product ${props.id}`} />
      </div>
      <h3 className="product-title">{props.title}</h3>
      <h4 className="product-price">${props.price.toFixed(2)}</h4>
    </div>
  );
}
