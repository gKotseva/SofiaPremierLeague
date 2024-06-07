import './Admin.modules.css'
import { Link } from 'react-router-dom'


export function Admin () {
    return (
        <>
            <div className="side-header">
                <Link><img src="penalty-kick.png"></img></Link>
                <Link><img src="soccer-player.png"></img></Link>
                <Link><img src="team.png"></img></Link>
                <Link><img src="football-club.png"></img></Link>
            </div>
        </>
    )
}