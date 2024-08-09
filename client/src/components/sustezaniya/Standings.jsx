import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { fetchStats } from "./utils";
import { Loader } from '../loader/Loader';

export function Standings() {
    const [stats, setStats] = useState([])
    const [seasons, setSeasons] = useState([])
    const [league, setLeague] = useState(0)
    const [title, setTitle] = useState('')
    const [season, setSeason] = useState(8)
    const [loading, setLoading] = useState(false)
 
    const location = useLocation()
    const path = location.pathname

    useEffect(() => {
        let leagueId;
        let title

        switch (path) {
            case '/superliga':
                leagueId = 18;
                title = 'Суперлига'
                break;
            case '/malus':
                leagueId = 1;
                title = 'SPL Malus-sport'
                break;
            case '/cairo':
                leagueId = 2;
                title = 'SPL1 Cairo'
                break;
            case '/flame':
                leagueId = 3;
                title = 'SPL2 Flame'
                break;
            case '/arabesk':
                leagueId = 22;
                title = 'SPL Arabesk'
                break;
            case '/spl4':
                leagueId = 44;
                title = 'SPL4'
                break;
            case '/spl5':
                leagueId = 47;
                title = 'SPL5'
                break;
        }

        setLeague(leagueId);
        setTitle(title)
    }, [path]);

    useEffect(() => {
        if (league !== 0) {
            loadStats(league, season);
        }
    }, [league, season]);

    const loadStats = async (league_id, season_id) => {
        setLoading(true)
        try {
            const response = await fetchStats(league_id, season_id);
            setStats(response.stats)
            setSeasons(response.seasons)
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const seasonTargetId = Number(e.target.value)
        setSeason(seasonTargetId)
        loadStats(league, seasonTargetId)
    }

    const currentSeason = seasons.find(seasonObj => seasonObj.season_id === season);
    const currentSeasonName = currentSeason ? currentSeason.seasons_name : '';

    return (
        <>
            {loading && <Loader />}
            <select name="seasons" id="seasons" onChange={handleChange}>
                {seasons.map((seasonObj, index) => (
                    <option value={seasonObj.season_id} key={index}>{seasonObj.seasons_name}</option>
                ))}
            </select>
            <div className='standings'>
                <h1>Класиране <span>{title} - {currentSeasonName}</span></h1>
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
                        {stats.map((stat, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{stat.team_name}</td>
                                <td>-</td>
                                <td>P P P P P</td>
                                <td>{stat.total_matches}</td>
                                <td>{stat.total_wins}</td>
                                <td>{stat.total_draws}</td>
                                <td>{stat.total_losses}</td>
                                <td>{stat.total_points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
