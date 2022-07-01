const PlayerCards = ({playerCards, displayImages}) => {
    return (
        <>
        <div id="player-cards">
            {displayImages(playerCards)}
        </div>
        </> 
    );
}

export default PlayerCards;