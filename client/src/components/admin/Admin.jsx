import { useState } from 'react';
import './Admin.modules.css'
import { getPlayers, getMatches, getTeams, getStaff } from '../../services/adminService';


export function Admin () {
    const [data, setData] = useState([])

    const fetchData = async (endpoint) => {
        try {
            const response = await endpoint()
            console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }



    return (
        <div className='main'>
            <div className="side-header">
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getPlayers) }}><img src="soccer-player.png"></img></a>
                    <h1>играчи</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getTeams) }}><img src="football-club.png"></img></a>
                    <h1>отбори</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getMatches) }}><img src="penalty-kick.png"></img></a>
                    <h1>мачове</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getStaff) }}><img src="team.png"></img></a>
                    <h1>персонал</h1>
                </div>
            </div>
            <div className='main-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Снимка</th>
                            <th>Име</th>
                            <th>Номер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>балаба</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}