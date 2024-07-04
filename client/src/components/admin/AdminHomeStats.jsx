import { useEffect, useState } from "react";
import { getAllStats } from "../../services/adminService";

export function AdminStats () {

    const [stats, setStats] = useState({
        teamsCount: 0,
        playersCount: 0,
        matchesCount: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await getAllStats()
    
                setStats({
                    teamsCount: response.teamsCount,
                    playersCount: response.playersCount
                })    
            } catch (error) {
                console.log(error)
            }
        }

        console.log(stats)

        fetchStats()
    }, [])

    return (
        <>
            <div className="container-all-stats">
                <div className="container-stats">
                <div className="container-stats-image">
                    <img src="team-color.png"></img>
                </div>
                <div className="container-stats-stats">
                    <strong><p>{stats.teamsCount}</p></strong>
                    <p>отбори</p>
                </div>
                </div>
                <div className="container-stats">
                <div className="container-stats-image">
                    <img src="football-player.png"></img>
                </div>
                <div className="container-stats-stats">
                    <strong><p>{stats.playersCount}</p></strong>
                    <p>играчи</p>
                </div>
                </div>            
                <div className="container-stats">
                <div className="container-stats-image">
                    <img src="football.png"></img>
                </div>
                <div className="container-stats-stats">
                    <strong><p>9999</p></strong>
                    <p>мачове</p>
                </div>
                </div>
            </div>
        </>
    )
}