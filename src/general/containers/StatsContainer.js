

const StatsContainer = ({user}) => {
  

    return(

        <>
            <h1>Stats</h1>

            <h3>Blackjack</h3>

            <p>{JSON.stringify(user.username)}</p>
        </>
    )
}

export default StatsContainer;