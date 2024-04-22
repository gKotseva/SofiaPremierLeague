import { Home } from "./HomeImages/HomeImages";
import { TableFixtures } from "./Tables/tableFixtures/TableFixtures";
import { TableResults } from "./Tables/tableResults/TableResults";
import { TableStandings } from "./Tables/tableStandings/TableStandings";

export function HomeMain () {
    return (
        <>
        <Home />
        <div>
            <TableFixtures />
            <TableResults />
        </div>
        <TableStandings />
        </>
    )
}