import { showRating } from "../../functions";

export default function ReviewCard(props) {
  return (
    <figure className="card-item">
      <blockquote>
        <p className="card-text">{props.text}</p>
      </blockquote>
      <div className="card-stars">{showRating(props.rating)}</div>
      <figcaption className="card-author">{props.name}</figcaption>
    </figure>
  );
}
