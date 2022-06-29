import { useEffect } from "react";
import { drawCard } from "../../lib/utils"
import DealerCards from "../components/DealerCards";

const DealerContainer = ({dealerCount, setDealerCount, dealerCards, setDealerCards, deck, isDealerBust, setIsDealerBust, isDealerTurn, isPlayerBust, drawDealerCard, displayImages}) => {

    useEffect(() => {

        let arr = [];
        for (let i=0; i<dealerCards.length; i++) {
            arr.push(dealerCards[i].weight);
        }
        if(arr.includes(1) && dealerCount < 12){
            setDealerCount(prevDealerCount => prevDealerCount + 10);
        }

        else if(isDealerTurn && dealerCount < 17 && !isPlayerBust) {
            drawDealerCard(1);
        }

        else if(isDealerTurn && dealerCount > 21) {
            setIsDealerBust(true)
        }

    }, [dealerCount, isDealerTurn])

    return (
        <>
        <DealerCards dealerCards={dealerCards} displayImages={displayImages}/>
        <p>Dealer Count: {isDealerTurn ? dealerCount : dealerCount}</p>
    </>

    )
}

export default DealerContainer;