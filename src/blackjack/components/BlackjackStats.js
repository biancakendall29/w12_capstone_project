import { useState, useEffect } from "react";
import BlackjackSessionStats from "./BlackjackSessionStats";

const BlackjackStats = ({ user }) => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        setSessions(user.sessions);
    }, [user])

    // useEffect(() => {
    //     console.log(sessions)
    // }, [sessions])

    let totalHandsPlayed = user.blackjackWins + user.blackjackLosses + user.blackjackPushes + user.blackjackBlackjacks

    let userWinPercentage = (((user.blackjackWins + user.blackjackBlackjacks) / totalHandsPlayed) * 100);

    let dealerWinPercentage = ((user.blackjackLosses / totalHandsPlayed) * 100);

    let isBeatingTheDealer = userWinPercentage > dealerWinPercentage ? true : false;

    const sessionStats = () => {
        let sessionsList = [];
        // console.log(sessions.length)
        for (let i = 0; i < sessions.length; i++) {
            let session = sessions[i]
            sessionsList.push((<BlackjackSessionStats session={session} />))
        }
        return sessionsList;
    }

    return (
        <>

            <div id="stats-body">
                {/* <h3 id="blackjack-heading">Blackjack</h3> */}
                <div id='blackjack-stats-body'>
                    <div id="blackjack-stats-stats">
                        <p><b>Win Percentage: {userWinPercentage.toFixed(1)}%</b></p>
                        <p>Loss Percentage: {(dealerWinPercentage).toFixed(1)}%</p><hr />
                        <p>Total hands played: {totalHandsPlayed}</p>
                        <p>Hands won: {user.blackjackWins}</p>
                        <p>Hands lost: {user.blackjackLosses}</p>
                        <p>Pushes: {user.blackjackPushes}</p>
                        <p>Blackjacks: {user.blackjackBlackjacks}</p><hr />
                        {isBeatingTheDealer ? <p>Congrats! You are beating the dealer by {(user.blackjackWins) - (user.blackjackLosses)} hands!!!</p>
                            : <p>You are {(user.blackjackLosses) - (user.blackjackWins)} hands behind the dealer - bad luck!</p>}
                    </div>
                    <div className="stats-leaderboard">

                    </div>
                </div>
            </div>
            <div className="session-stats">
                {sessionStats()}
            </div>
        </>
    );
}

export default BlackjackStats;