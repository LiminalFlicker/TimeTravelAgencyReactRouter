import Card from "../components/Card.jsx";
import { useOutletContext } from "react-router";

export default function Destinations() {
  const travelData = useOutletContext();

  if (!travelData) return <p>Loading...</p>;

  return (
    <>
      <h1 className="font-bold text-center">Find here all destinations</h1>

      <div className="flex flex-wrap place-content-around">
        {travelData?.map((dest) => (
          <Card travelData={dest} key={dest.id} />
        ))}
      </div>

      {/* <Card travelData={travelData[0]} key={1} /> */}
    </>
  );
}
