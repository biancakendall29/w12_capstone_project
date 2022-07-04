import { useEffect } from "react";

const PlayerCards = ({playerCards, displayImages}) => {

    // Flip player cards on deal:
    useEffect(() => {
        const element = document.querySelectorAll("#player-cards > .card");
        for(let i=0; i<element.length; i++){
            element[i].setAttribute("data-flip", "yes");
        }
    }, [playerCards])

    return (
        <>
        <div id="player-cards">
            {displayImages(playerCards)}
        </div>
        </> 
    );
}

export default PlayerCards;