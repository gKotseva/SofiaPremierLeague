import './Admin.modules.css'
import { Link } from 'react-router-dom'


export function Admin () {
    return (
        <>
            <div className="side-header">
                <div className='overlay'>
                    <Link><img src="soccer-player.png"></img></Link>
                    <h1>играчи</h1>
                </div>
                <div className='overlay'>
                    <Link><img src="football-club.png"></img></Link>
                    <h1>отбори</h1>
                </div>
                <div className='overlay'>
                    <Link><img src="penalty-kick.png"></img></Link>
                    <h1>мачове</h1>
                </div>
                <div className='overlay'>
                    <Link><img src="team.png"></img></Link>
                    <h1>персонал</h1>
                </div>
            </div>
        </>
    )
}