import "./Cards.css";
import { useEffect } from "react";

const DealerCards = ({dealerCards, displayImages, isDealerTurn}) => {

    // useEffects to change JSX custom data attribute for styling flipped card:

    // Flip vard 2 on dealer's turn:
    useEffect(() => {
        if(isDealerTurn){
            const element = document.querySelectorAll("#dealer-cards > .card:nth-of-type(2)");
            element[0].setAttribute("data-flip", "yes");
        }
    })

    // Flip card 1 on deal:
    useEffect(() => {
        const element = document.querySelectorAll("#dealer-cards > .card");
        for(let i=0; i<element.length; i++){
            if(i === 1){
                continue;
            } else {
                element[i].setAttribute("data-flip", "yes")
            }
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