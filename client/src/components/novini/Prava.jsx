import { useEffect, useState } from "react"
import { getPlayersRightsRevoked } from "../../services/service"

export function Prava(){
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPlayersRightsRevoked()
            setPlayers(response)
        }

        fetchData()
    }, [])


    return (
        <>
            <div className="forbidden">
                <h1>Играчи със спрени състезателни права</h1>
            </div>
            <div className="forbidden-players">
                {players.map((item) => (
                    <>
                        <p key={item.player_id}>{item.name}</p>
                        <hr />
                    </>
                ))}
            </div>
        </>
    )
}