import { useEffect } from "react";

const DealerCards = ({ dealerCards, displayImages, isDealerTurn }) => {

    // useEffects to change JSX custom data attribute for styling flipped card:

    useEffect(() => {
        // Flip card 2 on dealer's turn:
        if (isDealerTurn) {
            const element = document.querySelectorAll("#dealer-cards > .card");
            element[1].setAttribute("data-flip", "yes");
        }
    })

    // Flip subsequent dealer card(s) on hit me:
    useEffect(() => {
        const element = document.querySelectorAll("#dealer-cards > .card");

        // flip first dealer card on deal
        element[0].setAttribute("data-flip", "yes")

        // positioning cards
        for (let i = 0; i < element.length; i++) {
            let len = element.length - 1;
            let position = 5 * 1.1 ** len * (2 * i - len) / len;
            let positionStyle = `left: calc(${position}rem + 50% - 5rem)`
            element[i].setAttribute("style", positionStyle)

            if (element[i].getAttribute("data-flip") === "no" && i >= 2) {
                element[i].style.opacity = 0;

                setTimeout(() => {
                    element[i].setAttribute("style", "opacity: 100;" + positionStyle)
                },  (i-1) * 600)

                setTimeout(() => {
                    element[i].setAttribute("data-flip", "yes");
                }, (i-1) * 700);
            }
        }

    }, [dealerCards])

    return (
        <>
            <div id="dealer-cards">
                {displayImages(dealerCards)}
            </div>
        </>
    )
}

export default DealerCards;