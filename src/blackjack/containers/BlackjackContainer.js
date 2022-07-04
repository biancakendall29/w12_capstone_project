import { useEffect, useState } from "react";
import DealerContainer from "./DealerContainer.js";
import PlayerContainer from "./PlayerContainer.js";
import {createDeck, shuffle, displayImages} from "../../lib/utils.js";
import RoundButtons from "../components/RoundButtons.js";
import BettingContainer from "./BettingContainer.js";
import "../../styles/Blackjack.css"
import "../components/Cards.css";


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
    const [isRoundDone, setIsRoundDone] = useState(true);
    const [chipCount, setChipCount] = useState(1000);
    const [betAmount, setBetAmount] = useState(0);
    const [lockedBet, setLockedBet] = useState(0);

    const startRound = () => {
        if(lockedBet > 0){
            setPlayerCards([]);
            setPlayerCount(0);
            setDealerCards([]);
            setDealerCount(0);
            setIsRoundDone(false)
            setIsDealerTurn(false);
            setIsDealerBust(false);
            setIsPlayerBust(false);
            drawPlayerCard(2);
            drawDealerCard(2);
            console.log("round start");
        } else {
            window.alert("Place a Bet")
        }
    }

    const endRound = () => {
        setIsRoundDone(true);
        payout(result);
        console.log("round end");
        console.log(result);
        setLockedBet(0);
    }

    const payout = (result) => {
        if(result == "Player wins on points!" || result == "Player wins - dealer bust!"){
            setChipCount(chipCount + (lockedBet*2));
            console.log("Player Wins, chips should double");
        }
        if(result == "Push!" || result == "Push"){
            setChipCount(chipCount+lockedBet);
            console.log("Push, chips should return");
        }
        if(result == "Player wins - BlackJack!"){
            setChipCount(chipCount+(lockedBet*2.5));
            console.log("Blackjack");
        }
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
        setDeck(deck => deck.slice(0,deck.length-(numOfCards)));
        const nextCards = deck.slice(deck.length-(numOfCards), deck.length); 
        setPlayerCards(prevPlayerCards => ([...prevPlayerCards, ...nextCards]));
    }


    const drawDealerCard = (numOfCards = 1) => {
        console.log(deck);
        setDeck(deck => deck.slice(0,deck.length-(numOfCards)));
        const nextCards = deck.slice(deck.length-(numOfCards + 2), deck.length - 2); 
        setDealerCards(prevDealerCards => ([...prevDealerCards, ...nextCards]));
    }

    useEffect(() => {
        console.log(deck.length);
        if (deck.length < 30){
            console.log("deck < 30");
            setDeck(shuffle(createDeck()));
        }
    }, [deck])

    useEffect(() => {
        if (playerCards.length === 2 && playerCount === 21 && dealerCount !== 21 && dealerCards.length === 2) {
            setResult("Player wins - BlackJack!"); 
            setIsDealerTurn(true);
        }
        else if (dealerCards.length === 2 && ((dealerCards[0].weight === 1 && dealerCards[1].weight === 10) || (dealerCards[1].weight === 1 && dealerCards[0].weight === 10)) && playerCount !== 21) {
            setIsDealerTurn(true);
            setResult("Dealer wins - BlackJack!");
        } 
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
        <div id="blackjackContainer">
        <h2>Chip Count: {chipCount} </h2>
        <p>Locked Bet: {lockedBet}</p>
        {isRoundDone ? <></> : <><PlayerContainer playerCards={playerCards} playerCount={playerCount} setPlayerCount={setPlayerCount} 
                        setIsPlayerBust={setIsPlayerBust} setPlayerCards={setPlayerCards} deck={deck}
                        setIsDealerTurn={setIsDealerTurn} drawPlayerCard={drawPlayerCard} isPlayerBust={isPlayerBust} isDealerTurn={isDealerTurn} 
                        displayImages = {displayImages} chipCount={chipCount} setChipCount={setChipCount} lockedBet={lockedBet} setLockedBet={setLockedBet}/>
        <DealerContainer dealerCards={dealerCards} setDealerCards={setDealerCards} 
                        dealerCount={dealerCount} setDealerCount={setDealerCount} 
                        deck={deck} isDealerBust={isDealerBust} setIsDealerBust={setIsDealerBust}
                        isDealerTurn={isDealerTurn} isPlayerBust={isPlayerBust} drawDealerCard={drawDealerCard} displayImages={displayImages} playerCount={playerCount} playerCards={playerCards} result={result}/></>}
        {isDealerTurn ? result : <></>}
        {isRoundDone ? <BettingContainer chipCount={chipCount} setChipCount={setChipCount} betAmount={betAmount} setBetAmount={setBetAmount} lockedBet={lockedBet} setLockedBet={setLockedBet}/> : <></>}
        <RoundButtons isRoundDone={isRoundDone} setIsRoundDone={setIsRoundDone} isDealerTurn={isDealerTurn} setIsDealerTurn={setIsDealerTurn} endRound={endRound} startRound={startRound}/>
        </div>
        </>
    )

}

export default BlackjackContainer;