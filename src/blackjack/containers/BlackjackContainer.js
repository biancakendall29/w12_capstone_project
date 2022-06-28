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

        drawCard(deck,dealerHand);
        drawCard(deck,dealerHand);
        drawCard(deck,playerHand);
        drawCard(deck,playerHand);

        setDealerCards(dealerHand);
        setPlayerCards(playerHand);
    }

    const [playerCount, setPlayerCount] = useState(0);
    const [dealerCount, setDealerCount] = useState(0);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [deck, setDeck] = useState(shuffle(createDeck()));
    const [isDealerTurn, setIsDealerTurn] = useState(false);
    const [isPlayerBust, setIsPlayerBust] = useState(false);
    const [isDealerBust, setIsDealerBust] = useState(false);

    return(
        <>
        <PlayerContainer playerCards={playerCards} playerCount={playerCount} setPlayerCount={setPlayerCount} setIsPlayerBust={setIsPlayerBust} setPlayerCards={setPlayerCards} deck={deck}/>
        <DealerContainer dealerCards={dealerCards} setDealerCards={setDealerCards} dealerCount={dealerCount} setDealerCount={setDealerCount} deck={deck} isDealerBust={isDealerBust} setIsDealerBust={setIsDealerBust}/>
        <button onClick={startRound}>Reset</button>
        </>
    )

}

export default BlackjackContainer;