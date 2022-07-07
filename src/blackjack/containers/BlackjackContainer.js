import { useEffect, useState } from "react";
import DealerContainer from "./DealerContainer.js";
import PlayerContainer from "./PlayerContainer.js";
import {createDeck, shuffle, displayImages} from "../../lib/utils.js";
import RoundButtons from "../components/RoundButtons.js";
import BettingContainer from "./BettingContainer.js";



const BlackjackContainer = ({user, setUser,sessionStart,setSessionStart,putUser,setPutUser}) => {

    const [playerCount, setPlayerCount] = useState(0);
    const [dealerCount, setDealerCount] = useState(0);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    // const [deck, setDeck] = useState(shuffle(createDeck().concat(createDeck(),createDeck(),createDeck(),createDeck(),createDeck())));
    const [deck, setDeck] = useState(shuffle(createDeck()));
    const [isDealerTurn, setIsDealerTurn] = useState(false);
    const [isPlayerBust, setIsPlayerBust] = useState(false);
    const [isDealerBust, setIsDealerBust] = useState(false);
    const [result, setResult] = useState("");
    const [isRoundDone, setIsRoundDone] = useState(true);
    const [chipCount, setChipCount] = useState(1000);
    const [betAmount, setBetAmount] = useState(0);
    const [lockedBet, setLockedBet] = useState(0);
    const [roundCount, setRoundCount] = useState(0);
    const [sessionId, setSessionId] = useState(1);
    const [showPostButton, setShowPostButton] = useState(false);
    const [save, setSave] = useState(
        {
            timestamp: "2022-07-05",
            currentRound: 0,
            playerMoney: 0,
            deck: '',
            playerHand: '',
            dealerHand: '',
            roundResult: '',
            session: {id: sessionId}
        }
    )

    const newSession = {
        timestamp: "2022-07-05",
        user: { id: user.id},
        sessionFinished: false
    }

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
            // console.log("round start");
        } else {
            window.alert("Place a Bet")
        }
    }

    const endRound = () => {
        payout(result);
        console.log("round end");
        setLockedBet(0);
        setRoundCount(roundCount + 1);
        setShowPostButton(true);
    }

    const payout = (result) => {
        let copiedUser = { ...user}
        if(result == "Player wins on points!" || result == "Player wins - dealer bust!" || result == "Player wins - Blackjack!"){  //added to this
            setChipCount(chipCount + (lockedBet*2));
            console.log("Player Wins, chips should double");
            copiedUser.blackjackWins += 1
            setUser(copiedUser)
        }
        if(result == "Push!" || result == "Push"){
            setChipCount(chipCount+lockedBet);
            console.log("Push, chips should return");
            copiedUser.blackjackPushes += 1
            setUser(copiedUser)
        }
        if(result == "Player wins - BlackJack!"){
            setChipCount(chipCount+(lockedBet*2.5));
            console.log("Blackjack");
            copiedUser.blackjackBlackjacks += 1
            setUser(copiedUser)
        }
        if (result == "Dealer wins - BlackJack!" || result == "Dealer wins - player bust!" || result == "Dealer wins on points!") {
            setChipCount(chipCount)
            console.log('dealer wins');
            copiedUser.blackjackLosses += 1
            setUser(copiedUser)
        }
    }

    useEffect(() => {
        let copiedSave = {...save};
        copiedSave.roundResult = result;
        copiedSave.playerMoney = chipCount;
        copiedSave.currentRound = roundCount;
        copiedSave.session = {id: sessionId}
        let playerHandString = ''
        for(let i = 0; i < playerCards.length;i++){
            playerHandString += `${playerCards[i].code},`
        }
        copiedSave.playerHand = playerHandString
        let dealerHandString = ''
        for(let i = 0; i < dealerCards.length;i++){
            dealerHandString += `${dealerCards[i].code},`
        }
        copiedSave.dealerHand = dealerHandString
        let deckstring = ''
        for(let i = 0; i < deck.length;i++){
            deckstring += `${deck[i].code},`
        }
        copiedSave.deck = deckstring;
        // console.log(copiedSave);
        setSave(copiedSave);
    },[user,sessionStart,playerCards,dealerCards,chipCount])

    useEffect(() => {
        let copiedPutUser = {...putUser}
        copiedPutUser.blackjackWins = user.blackjackWins;
        copiedPutUser.blackjackLosses = user.blackjackLosses;
        copiedPutUser.blackjackPushes = user.blackjackPushes;
        copiedPutUser.blackjackBlackjacks = user.blackjackBlackjacks;
        setPutUser(copiedPutUser)
    },[user,sessionStart,playerCards])

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

    useEffect(() => {
        console.log('session posted');
        fetch('http://localhost:8080/blackjack_sessions',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSession)
        })
        .then(response => response.json())
        .then(data => {
            console.log('session id: ' + data.id);
            setSessionId(data.id)
        })
    },[sessionStart])

    const drawPlayerCard = (numOfCards = 1) => {
        setDeck(deck => deck.slice(0,deck.length-(numOfCards)));
        const nextCards = deck.slice(deck.length-(numOfCards), deck.length); 
        setPlayerCards(prevPlayerCards => ([...prevPlayerCards, ...nextCards]));
    }


    const drawDealerCard = (numOfCards = 1) => {
        // console.log(deck);
        setDeck(deck => deck.slice(0,deck.length-(numOfCards)));
        const nextCards = deck.slice(deck.length-(numOfCards + 2), deck.length - 2); 
        setDealerCards(prevDealerCards => ([...prevDealerCards, ...nextCards]));
    }

    useEffect(() => {
        // console.log(deck.length);
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
        <div id="top_box">
            <div id="top_chips">
                <h2>Chip Count: {chipCount} </h2>
                <h2 className="top_chips_locked_bet">Locked Bet: {lockedBet}</h2> 
            </div>
            <div id="top_result">
                <h2>{isDealerTurn && !isRoundDone ? result : <h2>Result: ?</h2>}</h2>
                {/* {isDealerTurn && isRoundDone ? <h2>Last round: {result} </h2>: <></>} */}
            </div>
        </div>
        {isRoundDone ? <></> : <>
        <DealerContainer dealerCards={dealerCards} setDealerCards={setDealerCards} 
                        dealerCount={dealerCount} setDealerCount={setDealerCount} 
                        deck={deck} isDealerBust={isDealerBust} setIsDealerBust={setIsDealerBust}
                        isDealerTurn={isDealerTurn} isPlayerBust={isPlayerBust} drawDealerCard={drawDealerCard} displayImages={displayImages} playerCount={playerCount} playerCards={playerCards} result={result}/>
        <div id="divider"></div>
        
        <PlayerContainer playerCards={playerCards} playerCount={playerCount} setPlayerCount={setPlayerCount} 
                        setIsPlayerBust={setIsPlayerBust} setPlayerCards={setPlayerCards} deck={deck}
                        setIsDealerTurn={setIsDealerTurn} drawPlayerCard={drawPlayerCard} isPlayerBust={isPlayerBust} isDealerTurn={isDealerTurn} 
                        displayImages = {displayImages} chipCount={chipCount} setChipCount={setChipCount} lockedBet={lockedBet} setLockedBet={setLockedBet}/></>}
        {isRoundDone ? <BettingContainer chipCount={chipCount} setChipCount={setChipCount} betAmount={betAmount} setBetAmount={setBetAmount} lockedBet={lockedBet} setLockedBet={setLockedBet}/> : <></>}
        <RoundButtons isRoundDone={isRoundDone} setIsRoundDone={setIsRoundDone} isDealerTurn={isDealerTurn} setIsDealerTurn={setIsDealerTurn} endRound={endRound} startRound={startRound} showPostButton={showPostButton} setShowPostButton={setShowPostButton} 
        save={save} setSessionStart={setSessionStart} user={user} putUser={putUser}/>
        </div>
        </>
    )

}

export default BlackjackContainer;