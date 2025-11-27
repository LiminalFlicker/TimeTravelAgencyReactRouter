export default function Card({ travelData }) {
  const { title, description, image } = travelData;

  return (
    <article className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Join Now</button>
        </div>
      </div>
    </article>
  );
}
