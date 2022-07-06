import { useEffect, useState } from "react";
import BlackjackStats from "../../blackjack/components/BlackjackStats";
import BlackjackSessionStats from '../../blackjack/components/BlackjackSessionStats'

const StatsContainer = ({ user }) => {
    let [selectedGame, setSelectedGame] = useState("blackjack");
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        setSessions(user.sessions);
    }, [user])

    useEffect(() => {
        console.log(sessions)
    }, [sessions])

    const handleSelectGame = (event) => {
        console.log(event);
        setSelectedGame(() => event.target.value);
        console.log(selectedGame);
    }

    // const getSession = (el) => {
    //     return <BlackjackSessionStats session={el} />
    // }


    // const sessionStats = () => {
    //     console.log(sessions.length)
    //     for (let i = 0; i < sessions.length; i++) {
    //         let session = sessions[i]
    //         getSession(session)
    //     }
    // }
    const sessionStats = () => {
        let sessionsList = [];
        console.log(sessions.length)
        for (let i = 0; i < sessions.length; i++) {
            let session = sessions[i]
            sessionsList.push((<BlackjackSessionStats session={session} />))
        }
        return sessionsList;
    }

    return (

        <div id="stats-container">
            <div id="stats-content">
                <h1 id="stats-heading">My Stats</h1>
                <div id="stats-dropdown">
                    <label>Select game: </label>
                    <select id="stats-select" value={selectedGame} onChange={handleSelectGame}>
                        <option value="blackjack">Blackjack</option>
                        <option value="poker">Poker</option>
                        <option value="hearts">Hearts</option>
                        <option value="wist">Wist</option>
                        <option value="snap">Snap</option>
                    </select>
                </div>



                {selectedGame === "blackjack" ?
                    <>
                        <div className="stats">

                            <div className="total-stats">
                                <BlackjackStats user={user} />
                            </div>
                            <div className="session-stats">
                                {sessionStats()}
                            </div>

                        </div>
                    </>
                    : <p>Play a game to add some stats!</p>}


            </div>
        </div>
    )
}

export default StatsContainer;