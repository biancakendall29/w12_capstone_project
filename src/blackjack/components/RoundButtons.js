import { Link } from "react-router-dom";

const RoundButtons = ({isRoundDone, setIsRoundDone, isDealerTurn, setIsDealerTurn, startRound, endRound,setShowPostButton,showPostButton,save,setSessionStart,user,putUser}) => {
    
        const handleStartRound = () => {
            startRound();
        }

        const handleEndRound = () => {
            endRound();
        }

        const handlePostButton = () => {
            setShowPostButton(false)
            setIsRoundDone(true);
            fetch('http://localhost:8080/blackjack_saves', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(save)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }

        const handleSessionEnd = () => {
            setShowPostButton(false)
            setIsRoundDone(true);
            setSessionStart(false)
            console.log('session end!');
            // console.log(JSON.stringify(putUser))
            fetch('http://localhost:8080/blackjack_saves', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(save)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            
            fetch('http://localhost:8080/users/' + user.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(putUser)
            })


        }
        
        if(!isRoundDone && isDealerTurn && !showPostButton){
            return (
                <button className="bet_button" onClick={handleEndRound}>End Round</button>
            );
        } else if(!isRoundDone && isDealerTurn && showPostButton){
            return (
                <>
                <button className="bet_button" onClick={handlePostButton}>Continue</button>
                <Link to="/" style={{textDecoration: 'none'}}><button className="bet_button" onClick={handleSessionEnd}>End Session</button></Link>
                </>
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