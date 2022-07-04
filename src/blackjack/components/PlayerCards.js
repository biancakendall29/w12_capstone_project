import { useEffect } from "react";

const PlayerCards = ({playerCards, displayImages}) => {

    // Flip player cards 1 and 2 on deal:
    useEffect(() => {
        const element = document.querySelectorAll("#player-cards > .card");
        for(let i=0; i<2; i++){
            element[i].setAttribute("data-flip", "yes");
        }
    }, [playerCards])


    // Flip subsequent player card(s) on hit me:
    useEffect(() => {
        const element = document.querySelectorAll("#player-cards > .card");

        setTimeout(() => {
                for(let i=2; i<element.length; i++){
                element[i].setAttribute("data-flip", "yes");
            }
        }, 10);
        
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