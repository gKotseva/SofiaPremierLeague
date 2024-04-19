import { Asistencii } from "../tables/Asistencii";
import { Golmaistori } from "../tables/Golmaistori";
import { Reiting } from "../tables/Reiting";

export function Malus () {
    return (
        <>
            <Reiting />
            <Asistencii />
            <Golmaistori />
        </>
    )
}