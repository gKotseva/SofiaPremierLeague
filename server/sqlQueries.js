const statsPerTeamLeagueSeason = `WITH TeamResults AS (
    SELECT 
        league_id,
        season_id,
        win_team AS team,
        COUNT(*) AS win_count
    FROM 
        matches
    WHERE 
        win_team IS NOT NULL
    GROUP BY 
        league_id,
        season_id,
        win_team
),
DrawResults AS (
    SELECT 
        league_id,
        season_id,
        home_team AS team,
        COUNT(*) AS draw_count
    FROM 
        matches
    WHERE 
        draw = true
    GROUP BY 
        league_id,
        season_id,
        home_team
    UNION ALL
    SELECT 
        league_id,
        season_id,
        away_team AS team,
        COUNT(*) AS draw_count
    FROM 
        matches
    WHERE 
        draw = true
    GROUP BY 
        league_id,
        season_id,
        away_team
),
TotalPoints AS (
    SELECT
        t.league_id,
        t.season_id,
        t.team,
        COALESCE(t.win_count, 0) * 3 AS points_from_wins,
        COALESCE(d.draw_count, 0) AS points_from_draws,
        (COALESCE(t.win_count, 0) * 3) + COALESCE(d.draw_count, 0) AS total_points
    FROM
        TeamResults t
    LEFT JOIN (
        SELECT 
            league_id,
            season_id,
            team,
            SUM(draw_count) AS draw_count
        FROM 
            DrawResults
        GROUP BY
            league_id,
            season_id,
            team
    ) d
    ON t.league_id = d.league_id AND t.season_id = d.season_id AND t.team = d.team
),
MatchStats AS (
    SELECT
        m.league_id,
        m.season_id,
        t.team,
        COUNT(*) AS total_matches,
        SUM(CASE WHEN (m.win_team = m.home_team AND m.home_team = t.team) OR (m.win_team = m.away_team AND m.away_team = t.team) THEN 1 ELSE 0 END) AS total_wins,
        SUM(CASE WHEN m.draw = true AND (m.home_team = t.team OR m.away_team = t.team) THEN 1 ELSE 0 END) AS total_draws,
        SUM(CASE WHEN m.draw = false AND (m.home_team = t.team OR m.away_team = t.team) AND m.win_team != t.team THEN 1 ELSE 0 END) AS total_losses
    FROM
        matches m
    INNER JOIN (
        SELECT DISTINCT league_id, season_id, win_team AS team FROM matches
        UNION
        SELECT DISTINCT league_id, season_id, home_team AS team FROM matches
        UNION
        SELECT DISTINCT league_id, season_id, away_team AS team FROM matches
    ) t ON m.league_id = t.league_id AND m.season_id = t.season_id
    WHERE m.home_team = t.team OR m.away_team = t.team
    GROUP BY
        m.league_id,
        m.season_id,
        t.team
)
SELECT
    tp.league_id,
    tp.season_id,
    t.team_name,
    tp.total_points,
    ms.total_matches,
    ms.total_wins,
    ms.total_draws,
    ms.total_losses
FROM 
    TotalPoints tp
JOIN teams t ON tp.team = t.team_id
JOIN MatchStats ms ON tp.league_id = ms.league_id 
                    AND tp.season_id = ms.season_id 
                    AND tp.team = ms.team
ORDER BY 
    tp.total_points DESC,
    tp.league_id,
    tp.season_id,
    t.team_name;
`

module.exports = {statsPerTeamLeagueSeason}