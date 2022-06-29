import { useEffect, useState } from "react";
import DealerContainer from "./DealerContainer.js";
import PlayerContainer from "./PlayerContainer.js";
// const {createDeck, shuffle, displayImages} = require('../../lib/utils.js')
import {createDeck, shuffle, displayImages} from "../../lib/utils.js";

const BlackjackContainer = () => {


    const [playerCount, setPlayerCount] = useState(0);
    const [dealerCount, setDealerCount] = useState(0);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [deck, setDeck] = useState(shuffle(createDeck()));
    const [isDealerTurn, setIsDealerTurn] = useState(false);
    const [isPlayerBust, setIsPlayerBust] = useState(false);
    const [isDealerBust, setIsDealerBust] = useState(false);
    const [result, setResult] = useState("");

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

    useEffect(() => {

        if (playerCards.length === 2 && playerCount === 21 && dealerCount !== 21) {
            setResult("Player wins - BlackJack!"); 
            setIsDealerTurn(true);
        }
       
        else if (dealerCards.length === 2 && dealerCount === 21 && playerCount !== 21) setResult("Dealer wins - BlackJack!")
        else if (dealerCards.length === 2 && dealerCount === 21 && playerCount === 21 && playerCards.length === 2) {
            setResult("Push!");
            setIsDealerTurn(true);
        }
        else if (isPlayerBust) setResult("Dealer wins - player bust!")
        else if (isDealerBust) setResult("Player wins - dealer bust!")
        else if (playerCount > dealerCount) setResult("Player wins on points!")
        else if (dealerCount > playerCount) setResult("Dealer wins on points!")
        else if (dealerCount == playerCount) setResult("Push")
    }, [playerCount, dealerCount, isPlayerBust, isDealerBust]);

    return(
        <>
        <PlayerContainer playerCards={playerCards} playerCount={playerCount} setPlayerCount={setPlayerCount} 
                        setIsPlayerBust={setIsPlayerBust} setPlayerCards={setPlayerCards} deck={deck}
                        setIsDealersTurn={setIsDealerTurn} drawPlayerCard={drawPlayerCard} isPlayerBust={isPlayerBust} isDealerTurn={isDealerTurn} displayImages = {displayImages}/>
        <DealerContainer dealerCards={dealerCards} setDealerCards={setDealerCards} 
                        dealerCount={dealerCount} setDealerCount={setDealerCount} 
                        deck={deck} isDealerBust={isDealerBust} setIsDealerBust={setIsDealerBust}
                        isDealerTurn={isDealerTurn} isPlayerBust={isPlayerBust} drawDealerCard={drawDealerCard} displayImages={displayImages}/>
         {isDealerTurn ? result : <></>}
        <button onClick={startRound}>Start Round</button>
        </>
    )

}

export default BlackjackContainer;