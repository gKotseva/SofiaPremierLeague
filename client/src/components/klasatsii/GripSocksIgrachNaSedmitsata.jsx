import './styles/styles.css'

import { useEffect, useState } from "react"
import * as service from '../../services/klasatsiiService'

export function GripSocksIgrachNaSedmitsata () {

    const [awards, setAwards] = useState([])

    useEffect(() => {
        const fetchAwards = async() => {
            try {
                const response = await service.getGripSocks()
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
            <h1>GRIPSOCKS BG ИГРАЧ НА СЕДМИЦАТА</h1>
            <p>Всяка седмица най-добре представилият се играч от дивизиите SPL FLAME, SPL3 или SPL4 ще получава специална награда от нашите нови партньори – Gripsocks BG – най-удобните чорапи на пазара! Не пропускайте да си поръчате!</p>
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