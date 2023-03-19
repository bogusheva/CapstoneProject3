import { Link } from "react-router-dom";
import "../../index.scss";

export default function ChoiceCard() {
  return (
    <div className="choice-item">
      <div className="choice-item-hovered">
        <h3>organic herbal</h3>
        <Link to="./shop">Shop now</Link>
      </div>
    </div>
  );
}
