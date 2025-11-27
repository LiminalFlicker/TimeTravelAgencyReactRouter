import { Link } from "react-router";

export default function Card({ travelData }) {
  const { title, description, image, slug, id } = travelData;

  return (
    <Link
      className="card bg-base-100 w-96 shadow-gray-500 shadow-sm m-4"
      to={`/destination/${slug}`}
    >
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">View more</button>
        </div>
      </div>
    </Link>
  );
}
