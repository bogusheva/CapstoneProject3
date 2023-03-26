import AdvantageCard from "../../../components/AdvantageCard";

import Advantage1 from "../../../assets/images/advantage1.svg";
import Advantage2 from "../../../assets/images/advantage2.svg";
import Advantage3 from "../../../assets/images/advantage3.svg";

export default function HomeAdvantages() {
  return (
    <section className="home-advantages">
      <AdvantageCard
        img={Advantage1}
        text="Inside City delivery within 3 days"
      />
      <AdvantageCard img={Advantage2} text="Free Samples with Every Order" />
      <AdvantageCard
        img={Advantage3}
        text="Free Shipping on Orders Above $600"
      />
    </section>
  );
}
