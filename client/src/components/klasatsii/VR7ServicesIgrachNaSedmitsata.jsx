import './styles/styles.css'

import { useEffect, useState } from "react"
import * as service from '../../services/klasatsiiService'

export function VR7ServicesIgrachNaSedmitsata () {
    const [awards, setAwards] = useState([])

    useEffect(() => {
        const fetchAwards = async() => {
            try {
                const response = await service.getVR7()
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
            <h1>VR7 SERVICES ИГРАЧ НА СЕДМИЦАТА</h1>
            <p>VR7 Services Играч на седмицата е най-новата ни игра, в която най-добрият футболист от даден кръг ще може да погрижи по най-добрия начин за автомобила си с 50% отстъпка. Компанията VR7 Services предлага пране на тапицерия на коли и дивани с висококачествена машина, вътрешно и външно почистване, превоз и много други. Още за услугите на VR7 Services вижте на сайта VR7services.com</p>
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