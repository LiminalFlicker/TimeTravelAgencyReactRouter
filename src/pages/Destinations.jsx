import Card from "../components/Card.jsx";
import { useOutletContext } from "react-router";

export default function Destinations() {
  const travelData = useOutletContext();

  return (
    <>
      <h1>Find here our destinations!</h1>
      <Card travelData={travelData[0]} key={1} />
    </>
  );
}
