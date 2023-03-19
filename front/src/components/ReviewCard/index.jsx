import "../../index.scss";

export default function ReviewCard(props) {
  let rating = [];
  for (let i = 0; i < props.rating; i++) {
    rating.push(<span key={i} className="icon-star-full"></span>);
  }

  return (
    <figure className="card-item">
      <blockquote>
        <p className="card-text">{props.text}</p>
      </blockquote>
      <div className="card-stars">{rating}</div>
      <figcaption className="card-author">{props.author}</figcaption>
    </figure>
  );
}
