export default function AdvantageCard(props) {
  return (
    <div className="advantage-item">
      <div className="icon-holder">
        <img src={props.img} alt="icon-advantage" />
      </div>
      <p className="advantage-text">{props.text}</p>
    </div>
  );
}
