const RoundButtons = ({isRoundDone, setIsRoundDone, isDealerTurn, setIsDealerTurn, startRound, endRound}) => {
    
        const handleStartRound = () => {
            startRound();
        }

        const handleEndRound = () => {
            endRound();
        }
        
        if(!isRoundDone && isDealerTurn){
            return (
                <button className="bet_button" onClick={handleEndRound}>End Round</button>
            );
        } else if(isRoundDone) {
            return (
                <button className="bet_button" onClick={handleStartRound}>Start Round</button>
            );
        } else {
            return (
                <></>
            );
        }
}

export default RoundButtons;