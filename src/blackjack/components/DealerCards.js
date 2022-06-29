import "./DealerCards.css";

const DealerCards = ({dealerCards, displayImages}) => {
    return(
        <>
        <div id="dealer-cards">
        {displayImages(dealerCards)}        
        </div>
        </>
    )
}

export default DealerCards;