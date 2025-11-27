import { Link, useOutletContext, useParams } from "react-router";

export default function ViewDestination() {
  const { slug } = useParams();
  // useOutletContext holt Daten vom Parent-Layout
  const travelData = useOutletContext();
  const dest = travelData.find((s) => s.slug === slug);

  return (
    <article>
      <figure>
        <img src={dest.image}></img>
        <figcaption>{dest.description}</figcaption>
      </figure>
    </article>
  );
}
