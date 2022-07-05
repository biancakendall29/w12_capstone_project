const BlackjackStats = ({user}) => {
    
    let totalHandsPlayed = user.blackjackWins + user.blackjackLosses + user.blackjackPushes + user.blackjackBlackjacks
    
    let userWinPercentage = (((user.blackjackWins + user.blackjackBlackjacks) / totalHandsPlayed) * 100);
    
    let dealerWinPercentage = ((user.blackjackLosses / totalHandsPlayed) * 100);

    let isBeatingTheDealer = userWinPercentage > dealerWinPercentage ? true : false;

    return (
        <>
            <h3>Blackjack</h3> 
            <p>Total hands played: {totalHandsPlayed}</p>
            <p>Hands won: {user.blackjackWins}</p>
            <p>Hands lost: {user.blackjackLosses}</p>
            <p>Pushes: {user.blackjackPushes}</p>
            <p>Blackjacks: {user.blackjackBlackjacks}</p>

            <p>Win Percentage: {userWinPercentage.toFixed(1)}%</p>

            <p>Dealer Win Percentage: {(dealerWinPercentage).toFixed(1)}%</p>

            {isBeatingTheDealer ? <p>Congrats! You are beating the dealer by {(user.blackjackWins) - (user.blackjackLosses)} hands!!!</p> 
            : <p>You are {(user.blackjackLosses) - (user.blackjackWins)} hands behind the dealer - bad luck!</p>}
        </>
    );
}

export default BlackjackStats;