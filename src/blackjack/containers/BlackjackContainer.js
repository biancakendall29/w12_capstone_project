import { useState } from "react";
const {createDeck, shuffle, drawCard} = require('../../lib/utils.js')


const BlackjackCountainer = () => {

    const startRound = () => {
        setPlayerCards([]);
        setPlayerCount(0);
        setDealerCards([]);
        setDealerCount(0);
        playerCards, dealerCards = [];

        setDeck(shuffle(createDeck()));

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
    const [deck, setDeck] = useState(shuffle(createDeck()))

}

export default BlackjackCountainer;