import { useEffect, useState } from 'react'
import './TableResults.modules.css'
import { getCurrentMatches } from '../../../../services/adminService'

export function TableResults () {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await getCurrentMatches()

                setMatches(response.newerGames)

            } catch (error) {
                console.log(error)

            }
        }
        fetchMatches()
    }, [])

    return (
        <>
        <div className='results'>
            <h1>Програма и Резултати</h1>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Домакин</th>
                        <th>Час / Резултат</th>
                        <th>Гост</th>
                        <th>Терен</th>
                        <th>Ден</th>
                    </tr>
                </thead>
                <tbody>
                {matches.map(m => (
                            <tr key={m.match_id}>
                                <td>{m.match_date}</td>
                                <td>{m.home_team}</td>
                                <td>{m.result ? m.result : '-'}</td>
                                <td>{m.away_team }</td>
                                <td>{m.field ? m.field : '-'}</td>
                                <td>{m.day ? m.day : '-'}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        </>
    )
}