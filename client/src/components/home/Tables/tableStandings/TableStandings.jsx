import { useEffect, useState } from 'react'
import './TableStandings.modules.css'
import { getLineups } from '../../../../services/lineupsService'

export function TableStandings () {
    const [lineups, setLineups] = useState([])

    useEffect(() => {
        const fetchLineups = async () => {
            try {
                const response = await getLineups()

            } catch (error) {
                console.log(error)

            }
        }
        fetchLineups()
    })
    return (
        <>
        <div className='standings'>
            <h1>Класиране</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Клуб</th>
                        <th>НТ</th>
                        <th>Форма</th>
                        <th>М</th>
                        <th>П</th>
                        <th>Р</th>
                        <th>З</th>
                        <th>Т</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}