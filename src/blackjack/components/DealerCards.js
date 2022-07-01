import "./DealerCards.css";
import { useEffect } from "react";

const DealerCards = ({dealerCards, displayImages, isDealerTurn}) => {

    // useEffect to change JSX custom data attribute for styling flipped card:
        useEffect(() => {
            if(isDealerTurn){
                const element = document.querySelectorAll("#dealer-cards > .card:nth-of-type(2)");
                element[0].setAttribute("data-flip", "yes");
            }
        })

    return(
        <>
        <div id="dealer-cards">
        {displayImages(dealerCards)}        
        </div>
        </>
    )
}

export default DealerCards;