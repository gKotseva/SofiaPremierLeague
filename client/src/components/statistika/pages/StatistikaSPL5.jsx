import { Asistencii } from "../tables/Asistencii";
import { Golmaistori } from "../tables/Golmaistori";
import { Reiting } from "../tables/Reiting";

export function StatistikaSPL5 () {
    return (
        <>
            <Reiting />
            <Asistencii />
            <Golmaistori />
        </>
    )
}