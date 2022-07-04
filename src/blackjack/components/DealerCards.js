import "./Cards.css";
import { useEffect } from "react";

const DealerCards = ({dealerCards, displayImages, isDealerTurn}) => {

    // useEffects to change JSX custom data attribute for styling flipped card:

    // Flip card 1 on deal:
    useEffect(() => {
        const element = document.querySelectorAll("#dealer-cards > .card");
        element[0].setAttribute("data-flip", "yes")
    }, [dealerCards])

    // Flip card 2 on dealer's turn:
    useEffect(() => {
        if(isDealerTurn){
            const element = document.querySelectorAll("#dealer-cards > .card:nth-of-type(2)");
            element[0].setAttribute("data-flip", "yes");
        }
    })

    // Flip player subsequent dealer card(s) on hit me:
    useEffect(() => {
        const element = document.querySelectorAll("#dealer-cards > .card");

        for(let i=2; i<element.length; i++){
            setTimeout(() => {
                    element[i].setAttribute("data-flip", "yes");     
            }, i * 300);
        }
        
    }, [dealerCards])

    return(
        <>
        <div id="dealer-cards">
        {displayImages(dealerCards)}        
        </div>
        </>
    )
}

export default DealerCards;