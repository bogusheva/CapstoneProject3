import { Link } from "react-router-dom";
import "../../index.scss";

export default function ChoiceCard({ title }) {
  return (
    <div className="choice-item">
      <div className="choice-item-hovered">
        <h3>{title}</h3>
        <Link to="./shop">Shop now</Link>
      </div>
    </div>
  );
}
