import { drawCard } from "../../lib/utils";
import PlayerCards from '../components/PlayerCards'

const PlayerContainer = ({playerCount, setPlayerCount, playerCards, setIsPlayerBust,setPlayerCards, deck}) => {

    const handleHit = () => {
        const playerHand = [...playerCards];
        drawCard(deck, playerHand);
        setPlayerCards(playerHand);
        const count = playerCount;
        setPlayerCount(count + playerHand[playerHand.length-1].weight)
    }

    const handleStick = () => {
        
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