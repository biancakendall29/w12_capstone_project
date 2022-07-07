import { useEffect } from "react";

const PlayerCards = ({ playerCards, displayImages }) => {

    // Flip player cards 1 and 2 on deal:
    useEffect(() => {
        const element = document.querySelectorAll("#player-cards > .card");

        for (let i = 0; i < element.length; i++) {
            let len = element.length - 1;
            let position =  5 * 1.1**len * (2*i - len) / len;            
            // let len = element.length;
            // let position =  11 * (i - (len-1)/2) * 1.1**(len-2) / (len-1);            
            element[i].setAttribute("style", `left: calc(${position}rem + 50% - 5rem)`)
        }

        setTimeout(() => {
            for (let i = 0; i < element.length; i++) {
                element[i].setAttribute("data-flip", "yes");
            }
        }, 100);
    }, [playerCards])


    // // Flip subsequent player card(s) on hit me:
    // useEffect(() => {
    //     const element = document.querySelectorAll("#player-cards > .card");



    // }, [playerCards])

    return (
        <>
            <div id="player-cards">
                {displayImages(playerCards)}
            </div>
        </>
    );
}

export default PlayerCards;