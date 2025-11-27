// import { NavLink } from "react-router";

export default function Home() {
  return (
    <>
      <h1 className="font-bold m-4 text-center text-3xl">
        Find your next adventure
      </h1>
      <section className="flex flex-col items-center gap-2.5">
        <input type="text" placeholder="Origin" className="input" />
        <input type="text" placeholder="Destination" className="input" />
        <input type="date" placeholder="Start date" className="input" />
        <input type="date" placeholder="End date" className="input" />
        <button className="btn btn-success">Submit Request</button>
      </section>
    </>
  );
}
