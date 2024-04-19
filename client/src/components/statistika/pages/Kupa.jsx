import { Asistencii } from "../tables/Asistencii";
import { Golmaistori } from "../tables/Golmaistori";

export function Kupa(){
    return (
        <>
            <Golmaistori />
            <Asistencii />
        </>
    )
}