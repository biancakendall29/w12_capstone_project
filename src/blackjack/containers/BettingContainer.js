import fiveChip from "../../img/5-chip.png";
import twentyFiveChip from "../../img/25-chip.png";
import fiftyChip from "../../img/50-chip.png";
import oneHundredChip from "../../img/100-chip.png";
import fiveHundredChip from "../../img/500-chip.png";
import oneThousandChip from "../../img/1000-chip.png";

const BettingContainer = ({chipCount,setChipCount,betAmount,setBetAmount,lockedBet,setLockedBet}) => {
    
    const handleBet = (bet) => {
        if(bet <= chipCount){
            setBetAmount(betAmount + bet);
            setChipCount(chipCount - bet);
        }
    }

    const handleLockedBet = () => {
        if(lockedBet > 0) {
            setChipCount(chipCount + lockedBet)
            setLockedBet(0)
        }
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
        <div className="bet_button_container">
            <h4>Bet Amount: {betAmount}</h4>
            <div id="bet-buttons-div">
                <button className="bet_button" onClick={handleLockedBet}>Lock In Bet</button>
                <button className="bet_button" onClick={clearBet}>Reset Bet</button>
            </div>
        </div>
        <div className="chip_container">
            <img className="chip_img" src={fiveChip} onClick={() => handleBet(5)} alt="5 chip"></img>
            <img className="chip_img" src={twentyFiveChip} onClick={() => handleBet(25)} alt="25 chip"></img>
            <img className="chip_img" src={fiftyChip} onClick={() => handleBet(50)} alt="50 chip"></img>
            <img className="chip_img" src={oneHundredChip} onClick={() => handleBet(100)} alt="100 chip"></img>
            <img className="chip_img" src={fiveHundredChip} onClick={() => handleBet(500)} alt="500 chip"></img>
            <img className="chip_img" src={oneThousandChip} onClick={() => handleBet(1000)} alt="1000 chip"></img>
        </div>
        </>
    )
}

export default BettingContainer;