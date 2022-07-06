import { useEffect } from "react";
import { drawCard } from "../../lib/utils"
import DealerCards from "../components/DealerCards";
import PlayerCards from "../components/PlayerCards";


const DealerContainer = ({result, dealerCount, setDealerCount, dealerCards, setDealerCards, deck, isDealerBust, setIsDealerBust, isDealerTurn, isPlayerBust, drawDealerCard, displayImages, playerCount, playerCards}) => {

    useEffect(() => {

        let arr = [];
        for (let i=0; i<dealerCards.length; i++) {
            arr.push(dealerCards[i].weight);
        }

        if(isDealerTurn && arr.includes(1) && dealerCount < 12){
            setDealerCount(prevDealerCount => prevDealerCount + 10);
        }

        else if(isDealerTurn && dealerCount < 17 && !isDealerBust && !isPlayerBust && !(playerCount===21 && playerCards.length===2)) {
            drawDealerCard(1);
            // console.log("dealercount:" + dealerCount);
        }

        else if(isDealerTurn && dealerCount > 21) {
            setIsDealerBust(true)
        }
        
        // else if(isDealerTurn && dealerCount )

    }, [isDealerTurn, dealerCount])

    useEffect(() => {
        let arr = [];
        let sum = 0;
        for (let i=0; i<dealerCards.length; i++) {
            arr.push(dealerCards[i].weight);
            sum +=dealerCards[i].weight;
        }

        if(isDealerTurn && dealerCards.length > 2 && sum < 17 && !isPlayerBust && !isDealerBust && arr.includes(1) && arr.includes(10) && !(playerCount===21 && playerCards.length===2)){
            drawDealerCard(1);
        }
    }, [dealerCards])

    return (
        <div id="dealer-container">        
        <h4 id="dealer_count">Dealer Count: {isDealerTurn ? dealerCount : "?"}</h4>
        <DealerCards dealerCards={dealerCards} displayImages={displayImages} isDealerTurn={isDealerTurn}/>
        </div>

    )
}

export default DealerContainer;