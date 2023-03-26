import { instaphotos } from "../../../data/instaphoto.js";

import InstaBlock from "../../../components/InstaBlock/index.jsx";

export default function HomeInstagram() {
  const photos = instaphotos.map((item) => (
    <InstaBlock key={item.id} {...item} />
  ));

  return (
    <section className="home-instagram">
      <h2 className="home-instagram-heading">Shop our insta</h2>
      <div className="instaphoto-container">{photos}</div>
    </section>
  );
}
