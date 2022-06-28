import { useEffect } from "react";
import { drawCard } from "../../lib/utils"
import DealerCards from "../components/DealerCards";

const DealerContainer = ({dealerCount, setDealerCount, dealerCards, setDealerCards, deck, isDealerBust, setIsDealerBust}) => {

    useEffect(() => {
        if(dealerCount < 17){
            const dealerHand = [...dealerCards]
            drawCard(deck,dealerHand)
            setDealerCards(dealerHand)
        }
        if(dealerCount > 21){
            setIsDealerBust(true)
        }
    }, [dealerCount])

    return (
        <>
        <DealerCards dealerCards={dealerCards}/>
        <p>Dealer Count: {dealerCount}</p>
    </>

    )
}

export default DealerContainer;