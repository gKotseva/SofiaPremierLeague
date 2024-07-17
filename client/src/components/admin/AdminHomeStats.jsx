import { useEffect, useState } from "react";
import { getAllStats } from "../../services/adminService";

export function AdminStats() {

    const [stats, setStats] = useState({
        teamsCount: 0,
        playersCount: 0,
        matchesCount: 0,
        leaguesCount: 0,
        seasonsCount: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await getAllStats()

                setStats({
                    teamsCount: response.teamsCount,
                    playersCount: response.playersCount,
                    leaguesCount: response.leaguesCount,
                    seasonsCount: response.seasonsCount,
                    matchesCount: response.matchesCount
                })
            } catch (error) {
                console.error(error)
            }
        }

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
                        <p>отбора</p>
                    </div>
                </div>
                <div className="container-stats">
                    <div className="container-stats-image">
                        <img src="football-player.png"></img>
                    </div>
                    <div className="container-stats-stats">
                        <strong><p>{stats.playersCount}</p></strong>
                        <p>играча</p>
                    </div>
                </div>
                <div className="container-stats">
                    <div className="container-stats-image">
                        <img src="football.png"></img>
                    </div>
                    <div className="container-stats-stats">
                        <strong><p>{stats.matchesCount}</p></strong>
                        <p>мача</p>
                    </div>
                </div>
                <div className="container-stats">
                    <div className="container-stats-image">
                        <img src="leagues.png"></img>
                    </div>
                    <div className="container-stats-stats">
                        <strong><p>{stats.leaguesCount}</p></strong>
                        <p>лиги</p>
                    </div>
                </div>
                <div className="container-stats">
                    <div className="container-stats-image">
                        <img src="season.png"></img>
                    </div>
                    <div className="container-stats-stats">
                        <strong><p>{stats.seasonsCount}</p></strong>
                        <p>сезона</p>
                    </div>
                </div>
            </div>
        </>
    )
}