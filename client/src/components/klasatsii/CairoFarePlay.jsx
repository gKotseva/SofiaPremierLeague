import './styles/styles.css'

import { useEffect, useState } from "react"
import * as service from '../../services/klasatsiiService'

export function CairoFareplay () {

    const [awards, setAwards] = useState([])

    useEffect(() => {
        const fetchAwards = async() => {
            try {
                const response = await service.getCairo()
                setAwards(response)
            } catch (error) {
                console.error('Error fetching awards: ', error)
            }
        }

        fetchAwards()
    }, [])
    
    return (
        <>
        <div className='award-heading'>
            <h1>CAIRO ФЕЪРПЛЕЙ!</h1>
            <p>Всеки месец отборът играл феърплей ще получи специална награда от топ заведението – Cairo Relax Bar  – бутилка и наргиле!</p>
        </div>
        <div className='award-container'>
        {awards.map((award) => 
            <div className='card' key={award.id}>
                <p>{award.name}</p>
                <img src={award.image}/>
            </div>
        )}
        </div>
        </>

    )
}