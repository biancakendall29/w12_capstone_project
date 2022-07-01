import { useEffect } from "react";
import { drawCard } from "../../lib/utils";
import PlayerCards from '../components/PlayerCards'

const PlayerContainer = ({playerCount, setPlayerCount, playerCards, setIsPlayerBust, setPlayerCards, deck, setIsDealerTurn, drawPlayerCard, isPlayerBust, isDealerTurn, displayImages,chipCount,setChipCount,setLockedBet,lockedBet}) => {

    const handleHit = () => {
        drawPlayerCard();
    }

    const handleStick = () => {
        setIsDealerTurn(true);
   }

   const handleDouble = () => {
        drawPlayerCard();
        setIsDealerTurn(true);
        setLockedBet(lockedBet*2);
        setChipCount(chipCount-lockedBet)
   }

   useEffect(() => {

    let arr = [];
    for (let i=0; i<playerCards.length; i++) {
        arr.push(playerCards[i].weight);
    }
    if(arr.includes(1) && playerCount < 12){
        setPlayerCount(prevPlayerCount => prevPlayerCount + 10);
    }

    if(playerCount > 21){
        setIsPlayerBust(true);
        setIsDealerTurn(true);
    }
   })

    return (
        <>
            <PlayerCards playerCards={playerCards} displayImages={displayImages}/>
            <p>Player Count: {playerCount}</p>
            {isPlayerBust ? <p>You are bust</p> : <></>}
            {isDealerTurn || playerCards.length <2 ? <></> : <button onClick={handleHit}>Hit me</button>}
            {isDealerTurn || playerCards.length <2 ? <></> : <button onClick={handleStick}>Stick</button>}
            {isDealerTurn || playerCards.length < 2 || (lockedBet > chipCount) || playerCards.length > 2 ? <></> : <button onClick={handleDouble}>Double</button>}
        </>
    );
}

export default PlayerContainer;