import './styles/styles.css'

import { useEffect, useState } from "react"
import * as service from '../../services/klasatsiiService'

export function IgrataNaArabesk () {

    const [awards, setAwards] = useState([])

    useEffect(() => {
        const fetchAwards = async() => {
            try {
                const response = await service.getArabesk()
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
            <h1>ИГРАТА НА ARABESK</h1>
            <p>SPL има удоволствието да си партнира с наргиле бара ARABESK! А това е най-новата ни игра, в която отборът, който вкара най-много голове в рамките на един месец (и има поне три изиграни мача) и отборът, който допусне най-малко попадения във вратата си в рамките на един месец (и има поне три изиграни мача) ще получават супер награда – безплатно наргиле и бутилка за отбора! Посете наргиле бар ARABESK  и си изкарайте страхотно!</p>
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