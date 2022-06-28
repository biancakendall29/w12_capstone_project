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


        // setDeck(shuffle(createDeck()));
        setIsDealerTurn(false);
        setIsDealerBust(false);
        setIsPlayerBust(false);
        
        drawPlayerCard(2);
        drawDealerCard(2);


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
        // const remainingDeck = deck.slice(0,deck.length-(numOfCards))
        // console.log(nextCards); 
        // console.log(remainingDeck); 
        setDeck(deck => deck.slice(0,deck.length-(numOfCards)));

        const nextCards = deck.slice(deck.length-(numOfCards), deck.length); 

        setPlayerCards(prevPlayerCards => ([...prevPlayerCards, ...nextCards]));
        //console.log(deck);
    }


    const drawDealerCard = (numOfCards = 1) => {
        console.log(deck);
        // const remainingDeck = deck.slice(0,deck.length-(numOfCards)) 
        // console.log(nextCards); 
        // console.log(remainingDeck); 
        setDeck(deck => deck.slice(0,deck.length-(numOfCards)));

        const nextCards = deck.slice(deck.length-(numOfCards + 2), deck.length - 2); 

        setDealerCards(prevDealerCards => ([...prevDealerCards, ...nextCards]));
        //console.log(deck);
    }

    useEffect(() => {
        console.log(deck.length);
        if (deck.length < 30){
            console.log("deck < 30");
            setDeck(shuffle(createDeck()));
        }
    }, [deck])
    
    return(
        <>
        <PlayerContainer playerCards={playerCards} playerCount={playerCount} setPlayerCount={setPlayerCount} 
                        setIsPlayerBust={setIsPlayerBust} setPlayerCards={setPlayerCards} deck={deck}
                        setIsDealersTurn={setIsDealerTurn} drawPlayerCard={drawPlayerCard}/>
        <DealerContainer dealerCards={dealerCards} setDealerCards={setDealerCards} 
                        dealerCount={dealerCount} setDealerCount={setDealerCount} 
                        deck={deck} isDealerBust={isDealerBust} setIsDealerBust={setIsDealerBust}
                        isDealerTurn={isDealerTurn}/>
        <button onClick={startRound}>Start Round</button>
        </>
    )

}

export default BlackjackContainer;