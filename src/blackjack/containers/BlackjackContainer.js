import { useEffect, useState } from "react";
import DealerContainer from "./DealerContainer.js";
import PlayerContainer from "./PlayerContainer.js";
const {createDeck, shuffle, drawCard} = require('../../lib/utils.js')



const BlackjackContainer = () => {

    const startRound = () => {
        setPlayerCards([]);
        setPlayerCount(0);
        setDealerCards([]);
        setDealerCount(0);
        setDeck(shuffle(createDeck()));
        setIsDealerTurn(false);
        setIsDealerBust(false);
        setIsPlayerBust(false);

        const dealerHand = []
        const playerHand = []

        // drawCard(deck,dealerHand);
        // drawCard(deck,dealerHand);
        drawPlayerCard();
        drawPlayerCard();

        // setDealerCards(dealerHand);
        // setPlayerCards(playerHand);
    }

    const [playerCount, setPlayerCount] = useState(0);
    const [dealerCount, setDealerCount] = useState(0);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [deck, setDeck] = useState(shuffle(createDeck()));
    const [isDealerTurn, setIsDealerTurn] = useState(false);
    const [isPlayerBust, setIsPlayerBust] = useState(false);
    const [isDealerBust, setIsDealerBust] = useState(false);

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

    const drawPlayerCard = () => {
        const nextCard = deck[deck.length-1]
        setPlayerCards([...playerCards, nextCard]) 
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
        </>
    )

}

export default BlackjackContainer;