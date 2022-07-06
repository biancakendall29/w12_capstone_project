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
            <h4 id="player_count">Player Count: {playerCount}</h4>
            <div id="play_buttons">
                {isDealerTurn || playerCards.length <2 ? <></> : <button className="play_button" onClick={handleHit}>Hit Me</button>}
                {isDealerTurn || playerCards.length <2 ? <></> : <button className="play_button" onClick={handleStick}>Stick</button>}
                {isDealerTurn || playerCards.length < 2 || (lockedBet > chipCount) || playerCards.length > 2 ? <></> : <button className="play_button" onClick={handleDouble}>Double</button>}
            </div>
        </>
    );
}

export default PlayerContainer;