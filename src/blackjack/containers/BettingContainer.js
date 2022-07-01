const BettingContainer = ({chipCount,setChipCount,betAmount,setBetAmount,lockedBet,setLockedBet}) => {
    
    const handleBet = (bet) => {
        if(bet <= chipCount){
            setBetAmount(betAmount + bet);
            setChipCount(chipCount - bet);
        }
    }

    const handleLockedBet = () => {
        if(betAmount > 0){
            setLockedBet(betAmount);
            setBetAmount(0);
        }
    }

    const clearBet = () => {
        setLockedBet(0);
        setBetAmount(0);
        setChipCount(chipCount+lockedBet+betAmount);
    }

    return(
        <>
        <p>Bet Amount: {betAmount}</p>
        <button onClick={handleLockedBet}>Lock In Bet</button>
        <button onClick={clearBet}>Reset Bet</button>
        <button onClick={() => handleBet(5)}>Bet 5</button>
        <button onClick={() => handleBet(25)}>Bet 25</button>
        <button onClick={() => handleBet(50)}>Bet 50</button>
        <button onClick={() => handleBet(100)}>Bet 100</button>
        <button onClick={() => handleBet(500)}>Bet 500</button>
        <button onClick={() => handleBet(1000)}>Bet 1000</button>
        </>
    )
}

export default BettingContainer;