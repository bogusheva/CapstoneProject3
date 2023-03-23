import ChoiceCard from "../../../components/ChoiceCard";
import "../../../index.scss";

export default function HomeChoice() {
  return (
    <section className="home-choice">
      <ChoiceCard title={"organic green"} />
      <ChoiceCard title={"organic herbal"} />
      <ChoiceCard title={"organic black"} />
    </section>
  );
}
