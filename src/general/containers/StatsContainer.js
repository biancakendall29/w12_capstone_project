import { useState } from "react";
import BlackjackStats from "../../blackjack/components/BlackjackStats";

const StatsContainer = ({ user }) => {
    let [selectedGame, setSelectedGame] = useState("blackjack");

    const handleSelectGame = (event) => {
        // console.log(event);
        setSelectedGame(() => event.target.value);
        // console.log(selectedGame);
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
                    <div id="stats-dropdown-filler"></div>
                </div>



                {selectedGame === "blackjack" ?
                    <>
                        <div className="stats">

                            <div className="total-stats">
                                <BlackjackStats user={user} />
                            </div>
                        </div>
                    </>
                    : <p>Play a game to add some stats!</p>}


            </div>
        </div>
    )
}

export default StatsContainer;