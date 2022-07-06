import { useEffect, useState } from "react";
import BlackjackStats from "../../blackjack/components/BlackjackStats";
import BlackjackSessionStats from '../../blackjack/components/BlackjackSessionStats'

const StatsContainer = ({ user }) => {
    let [selectedGame, setSelectedGame] = useState("blackjack");
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
      setSessions(user.sessions);
    },[user])

    useEffect(() => {
      console.log(sessions)
    },[sessions])

    const handleSelectGame = (event) => {
        console.log(event);
        setSelectedGame(() => event.target.value);
        console.log(selectedGame);
    }


    const sessionStats = () => {
      for (let i = 0; i < sessions.length; i++) {
        let session = sessions[i]
        return <BlackjackSessionStats session={session}/>
      }  
    }

    return(

        <div id="stats-container">
            <h1 id="stats-heading">Stats</h1> 
            <div id="stats-dropdown">
                <label>Select a game to view stats: </label>
                <select id="stats-select" value={selectedGame} onChange={handleSelectGame}>
                    <option value="blackjack">Blackjack</option>
                    <option value="poker">Poker</option>
                    <option value="hearts">Hearts</option>
                    <option value="wist">Wist</option>
                    <option value="snap">Snap</option>
                </select>
            </div>
   
            

            {selectedGame==="blackjack" ? 
                <>
                <div className="total-stats">
                    <BlackjackStats user={user}/>
                </div>
                <div className="session-stats">
                    {sessionStats()}
                </div>
                
                </>
            : <p>Play a game to add some stats!</p>}


        </div>
    )
}

export default StatsContainer;