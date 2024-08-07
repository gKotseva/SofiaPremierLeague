import { useEffect, useState } from "react"
import { fetchStats } from "./utils";

export function SPL2Flame() {
    const [stats, setStats] = useState([])
    const [seasons, setSeasons] = useState([])

    useEffect(() => {
        const loadStats = async () => {
            try {
                const response = await fetchStats(3, 5); //fix
                setStats(response.stats)
                setSeasons(response.seasons)
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        loadStats();
    }, []);

    return (
        <>
            <select name="cars" id="cars">
                {seasons.map((season, index) => (
                    <option value="volvo" key={index}>{season.seasons_name}</option>
                ))}
            </select>
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