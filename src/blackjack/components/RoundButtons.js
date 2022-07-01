const RoundButtons = ({isRoundDone, setIsRoundDone, isDealerTurn, setIsDealerTurn, startRound, endRound}) => {
    

        const handleStartRound = () => {
            startRound();
        }

        const handleEndRound = () => {
            endRound();
        }
        
        // {(!isRoundDone && isDealerTurn) ? <button onClick={startRound}>Start Round</button> : <button onClick={endRound}>End Round</button>}
        if(!isRoundDone && isDealerTurn){
            return (
                <button onClick={handleEndRound}>End Round</button>
            );
        } else if(isRoundDone) {
            return (
                <button onClick={handleStartRound}>Start Round</button>
            );
        } else {
            return (
                <></>
            );
        }
}

export default RoundButtons;