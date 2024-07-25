import { Home } from "./HomeImages/HomeImages";
import { TableResults } from "./Tables/tableResults/TableResults";
import { TableStandings } from "./Tables/tableStandings/TableStandings";

export function HomeMain () {
    return (
        <>
        <Home />
        <div>
            <TableResults />
        </div>
        <TableStandings />
        </>
    )
}