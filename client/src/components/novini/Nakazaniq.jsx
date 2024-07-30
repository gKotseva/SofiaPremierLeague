import { useEffect, useState } from 'react'
import './all.modules.css'
import { getPenalties } from '../../services/service'

export function Nakazaniq() {
    const [penalties, setPenalties] = useState([])

    useEffect(() => {
        const fetchPenalties = async () => {
            try {
                const response = await getPenalties();
                const processedPenalties = response.map(item => ({
                    ...item,
                    penalties: item.penalties.split('\n').map(entry => entry.trim()).filter(entry => entry) // Split by new line and clean up
                }));
                setPenalties(processedPenalties);
            } catch (error) {
                console.error(error)
            }
        }

        fetchPenalties()

    }, [])

    return (
        <>
            <div className='heading'>
                <h1>НАКАЗАНИЯ</h1>
                <h3>Играчите със звезда са наказани за всички отбори във всички дивизии!</h3>
            </div>
            <div className='penalties-container'>
                {penalties.map((item) => (
                    <div className='penalties'>
                        <h3>Текущи и нови наказания - {item.penalties_date}</h3>
                        {item.penalties.map((item) => (
                            <p>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}