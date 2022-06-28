import { useEffect } from "react";
import { drawCard } from "../../lib/utils"
import DealerCards from "../components/DealerCards";

const DealerContainer = ({dealerCount, setDealerCount, dealerCards, setDealerCards, deck, isDealerBust, setIsDealerBust, isDealerTurn}) => {

    useEffect(() => {
        if(isDealerTurn && dealerCount < 17){
            const dealerHand = [...dealerCards]
            drawCard(deck, dealerHand)
            setDealerCards(dealerHand)

        }

        if(isDealerTurn && dealerCount > 21){
            setIsDealerBust(true)
        }
    })

    return (
        <>
        <DealerCards dealerCards={dealerCards}/>
        <p>Dealer Count: {dealerCount}</p>
    </>

    )
}

export default DealerContainer;