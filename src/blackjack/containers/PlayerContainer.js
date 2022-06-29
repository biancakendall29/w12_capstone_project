import { useEffect } from "react";
import { drawCard } from "../../lib/utils";
import PlayerCards from '../components/PlayerCards'

const PlayerContainer = ({playerCount, setPlayerCount, playerCards, setIsPlayerBust, setPlayerCards, deck, setIsDealersTurn, drawPlayerCard, isPlayerBust, isDealerTurn}) => {

    const handleHit = () => {
        drawPlayerCard();
    }

    const handleStick = () => {
        setIsDealersTurn(true);
   }

   useEffect(() => {
        if(playerCount > 21){
            setIsPlayerBust(true);
            setIsDealersTurn(true);
        }
   })

    return (
        <>
            <PlayerCards playerCards={playerCards}/>
            <p>Player Count: {playerCount}</p>
            {isPlayerBust ? <p>You are bust</p> : <></>}
            {isDealerTurn || playerCards.length <2 ? <></> : <button onClick={handleHit}>Hit me</button>}
            {isDealerTurn ? <></> : <button onClick={handleStick}>Stick</button>}
        </>
    );
}

export default PlayerContainer;