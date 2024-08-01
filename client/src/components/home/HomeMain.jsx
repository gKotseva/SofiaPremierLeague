import { Navigation } from "../navigation/Navigation";
import "./HomeMain.modules.css";
import { TableResults } from "./Tables/tableResults/TableResults";
import { TableStandings } from "./Tables/tableStandings/TableStandings";
import { Heading } from "./heading/Heading";



export function HomeMain() {
  return (
    <>
      <div className="main-container">
        <Heading /> 
        <TableResults />
        <TableStandings />
      </div>
    </>
  );
}
