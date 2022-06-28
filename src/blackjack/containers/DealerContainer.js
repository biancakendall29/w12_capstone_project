import { useEffect } from "react";
import { drawCard } from "../../lib/utils"
import DealerCards from "../components/DealerCards";

const DealerContainer = ({dealerCount, setDealerCount, dealerCards, setDealerCards, deck, isDealerBust, setIsDealerBust, isDealerTurn, isPlayerBust, drawDealerCard}) => {

    useEffect(() => {

        if(isDealerTurn && dealerCount < 17 && !isPlayerBust) {
            drawDealerCard(1);
        }

        if(isDealerTurn && dealerCount > 21) {
            setIsDealerBust(true)
        }

    }, [dealerCount, isDealerTurn])

    return (
        <>
        <DealerCards dealerCards={dealerCards}/>
        <p>Dealer Count: {dealerCount}</p>
    </>

    )
}

export default DealerContainer;