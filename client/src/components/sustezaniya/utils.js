import { getStats } from "../../services/lineupsService";

export const fetchStats = async (league, season) => {
        try {
            const response = await getStats();
            const seasons = response.seasons
            const filteredResults = response.stats.filter(result =>
                result.league_id === league && result.season_id === season
            );

            return {stats:filteredResults, seasons}
            
        } catch (error) {
            console.error("Error fetching stats:", error);
        }

};