import { drawCard } from "../../lib/utils";
import PlayerCards from '../components/PlayerCards'

const PlayerContainer = ({playerCount, setPlayerCount, playerCards, setIsPlayerBust, setPlayerCards, deck, setIsDealersTurn, drawPlayerCard}) => {

    const handleHit = () => {
        const playerHand = [...playerCards];
        drawPlayerCard();
        setPlayerCards(playerHand);    
    }

    const handleStick = () => {
        setIsDealersTurn(true);
   }

    return (
        <>
            <PlayerCards playerCards={playerCards}/>
            <p>Player Count: {playerCount}</p>
            <button onClick={handleHit}>Hit me</button>
            <button onClick={handleStick}>Stick</button>
        </>
    );
}

export default PlayerContainer;