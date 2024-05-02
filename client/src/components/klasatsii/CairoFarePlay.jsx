import { useEffect, useState } from "react"
import * as service from '../../services/klasatsiiService'

export function CairoFareplay () {

    const [awards, setAwards] = useState([])

    useEffect(() => {
        const fetchAwards = async() => {
            try {
                const response = await service.getAll('cairo')
                setAwards(response)
                console.log(response)
            } catch (error) {
                console.error('Error fetching awards: ', error)
            }
        }

        fetchAwards()
    }, [])

    return (
        <>
            <h1>CAIRO ФЕЪРПЛЕЙ!</h1>
            <p>Всеки месец отборът играл феърплей ще получи специална награда от топ заведението – Cairo Relax Bar  – бутилка и наргиле!</p>
            <h5>Име отбор</h5>
            <img></img>
        </>
    )
}