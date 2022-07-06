import { useState } from "react";
import BlackjackStats from "../../blackjack/components/BlackjackStats";


const StatsContainer = ({ user }) => {
    let [selectedGame, setSelectedGame] = useState("blackjack");

    const handleSelectGame = (event) => {
        console.log(event);
        setSelectedGame(() => event.target.value);
        console.log(selectedGame);
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
                <BlackjackStats user={user}/>
            : <p>Play a game to add some stats!</p>}

            
        </div>
    )
}

export default StatsContainer;