import { useEffect, useState } from "react";
import DealerContainer from "./DealerContainer.js";
import PlayerContainer from "./PlayerContainer.js";
const {createDeck, shuffle, drawCard} = require('../../lib/utils.js')



const BlackjackContainer = () => {


    const [playerCount, setPlayerCount] = useState(0);
    const [dealerCount, setDealerCount] = useState(0);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [deck, setDeck] = useState(shuffle(createDeck()));
    const [isDealerTurn, setIsDealerTurn] = useState(false);
    const [isPlayerBust, setIsPlayerBust] = useState(false);
    const [isDealerBust, setIsDealerBust] = useState(false);

    const startRound = () => {
        setPlayerCards([]);
        setPlayerCount(0);
        setDealerCards([]);
        setDealerCount(0);
        setDeck(shuffle(createDeck()));
        setIsDealerTurn(false);
        setIsDealerBust(false);
        setIsPlayerBust(false);
        
        drawPlayerCard(2);
    }

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < dealerCards.length; i++) {
            count += dealerCards[i].weight;
        }   
        setDealerCount(count); 
    },[dealerCards])

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < playerCards.length; i++) {
            count += playerCards[i].weight;
        }   
        setPlayerCount(count); 
    },[playerCards])


    const drawPlayerCard = (numOfCards = 1) => {
        const nextCards = deck.splice(deck.length-(numOfCards));        
        setDeck(deck);
        setPlayerCards(prevPlayerCards => ([...prevPlayerCards, ...nextCards]));
        console.log(deck);
    }

    return(
        <>
        <PlayerContainer playerCards={playerCards} playerCount={playerCount} setPlayerCount={setPlayerCount} 
                        setIsPlayerBust={setIsPlayerBust} setPlayerCards={setPlayerCards} deck={deck}
                        setIsDealersTurn={setIsDealerTurn} drawPlayerCard={drawPlayerCard}/>
        <DealerContainer dealerCards={dealerCards} setDealerCards={setDealerCards} 
                        dealerCount={dealerCount} setDealerCount={setDealerCount} 
                        deck={deck} isDealerBust={isDealerBust} setIsDealerBust={setIsDealerBust}
                        isDealerTurn={isDealerTurn}/>
        <button onClick={startRound}>Reset</button>
        {/* <button onClick={initialDeal}>Deal</button>
        <button onClick={logDeck}>Print Deck to console</button> */}
        </>
    )

}

export default BlackjackContainer;