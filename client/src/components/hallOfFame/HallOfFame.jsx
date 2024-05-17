import { useEffect, useState } from 'react'
import './HallOfFame.modules.css'
import * as service from '../../services/klasatsiiService'


export function HallOfFame () {
    const [award5Years, setAward5Years] = useState([])

    useEffect(() => {
        const fetchAward5Years = async () => {
            try {
                const response = await service.getAward5Years()
                setAward5Years(response)
            }
            catch (error) {
                console.error('Error fetching awards: ', error)
            }
        }
        fetchAward5Years()
    }, [])

    const [award200Goals, setAward200Goals] = useState([])

    useEffect(() => {
        const fetchAward200Goals = async () => {
            try {
                const response = await service.getAward200Goals()
                setAward200Goals(response)
            }
            catch (error) {
                console.error('Error fetching awards: ', error)
            }
        }
        fetchAward200Goals()
    }, [])

    const [data, setData] = useState([])
    const [leagues, setLeagues] = useState([])
    const [years, setYears] = useState([])

    useEffect(() => {
        const fetchChampionsData = async () => {
            try {
                const response = await service.getChampions()

                const leaguesSet = new Set(data.map(item => item.league))
                const yearsSet = new Set(data.map(item => item.year))

                setLeagues([...leaguesSet])
                setYears([...yearsSet])
                setData(response)
            }
            catch (error) {
                console.error('Error fetching champions: ', error)
            }
        }

        fetchChampionsData()
    }, [data])

    const getChampion = (year, league) => {
        const championEntry = data.find(
            item => item.year === year && item.league === league
        )
        return championEntry ? championEntry.champion : 'N/A'
    }


    return (
        <>
        <div className='hall-of-fame-table'>
            <h1>Hall of fame</h1>
            <table className="hall-of-fame">
                <thead>
                    <tr>
                        <th>Сезон</th>
                        {leagues.map(league => (
                            <th key={league}>{league}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {years.map( year => (
                        <tr key={year}>
                            <td>{year}</td>
                            {leagues.map(league => (
                                <td key={`${year}-${league}`}>{getChampion(year, league)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='fastest-goal'>
            <h1>Най-бърз гол:</h1>
            <p>Емо Стефанов (Titanite Old Stars) – 9 секунда в мача Вълците – Titanite Old Stars (2:2 – 7 юни 2020 година)</p>
            <iframe src="https://www.youtube.com/watch?v=DKaqVCd3SjY"></iframe>
        </div>
        <div className='hall-of-fame-container'>
            <div className='200-goals-container'>
            <h1>Клуб 200 гола</h1>
            {award200Goals.map((award) => 
                <div className='200-goals-card' key={award.id}>
                    <h4>{award.name}</h4>
                    <hr></hr>
                    <img src={award.image} />
                </div>
        )}
            </div>
            <div className='5-years-container'>
            <h1>5 години в SPL</h1>
            {award5Years.map((award) => 
                <div className='5-years-card' key={award.id}>
                    <h4>{award.name}</h4>
                    <hr></hr>
                    <img src={award.image} />
            </div>
            )}
            </div>
        </div>
        </>
    )
}