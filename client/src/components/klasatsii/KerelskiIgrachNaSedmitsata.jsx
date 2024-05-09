import './styles/styles.css'

import { useEffect, useState } from "react"
import * as service from '../../services/klasatsiiService'

export function KerelskiIgrachNaSedmitsata () {
    const [awards, setAwards] = useState([])

    useEffect(() => {
        const fetchAwards = async() => {
            try {
                const response = await service.getKerelski()
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
            <h1>KERELSKI ИГРАЧ НА СЕДМИЦАТА</h1>
            <p>Всяка седмица от KERELSKI BARBER & BEAUTY дават награда безплатна подстрежка за най-добре представилият се играч в дивизиите SELECT СУПЕРЛИГА, SPL MALUS-SPORT И SPL CAIRO! Наградата ще бъде присъждана по мнение на организаторите след всеки изигран кръг, където най-добре представилият се футболист ще бъде отличен.</p>
            <p>Всяка седмица победителят ще получава безплатно посещение в най-добрия салон Kerelski Barber & Beauty . Той се намира в кв. „Манастирски ливади“ на ул. Пирин 83. Ваучерът ще важи 3 месеца от получаването!</p>
        </div>
        <div className='award-container'>
            {awards.map((award) => 
            <div className='card' key={award.id}>
                <h5>{award.name}</h5>
                <img src={award.image}/>
            </div>
            )}
        </div>
        </>
    )
}