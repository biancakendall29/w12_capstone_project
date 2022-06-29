import { useEffect } from "react";
import { drawCard } from "../../lib/utils";
import PlayerCards from '../components/PlayerCards'

const PlayerContainer = ({playerCount, setPlayerCount, playerCards, setIsPlayerBust, setPlayerCards, deck, setIsDealersTurn, drawPlayerCard, isPlayerBust, isDealerTurn, displayImages}) => {

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
        if(playerCards.length === 2 && playerCards[0].value === "A" && playerCards[1].value === "A"){
            playerCards[1].weight = 1;
        }
   })

    return (
        <>
            <PlayerCards playerCards={playerCards} displayImages={displayImages}/>
            <p>Player Count: {playerCount}</p>
            {isPlayerBust ? <p>You are bust</p> : <></>}
            {isDealerTurn || playerCards.length <2 ? <></> : <button onClick={handleHit}>Hit me</button>}
            {isDealerTurn || playerCards.length <2 ? <></> : <button onClick={handleStick}>Stick</button>}
        </>
    );
}

export default PlayerContainer;