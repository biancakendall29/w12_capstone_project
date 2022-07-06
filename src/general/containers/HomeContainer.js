import Slider from "../Slider";

const HomeContainer = ({ sessionStart, setSessionStart, isLoggedIn }) => {

    return (

        <div id="home">
            <h1>Welcome! Please sign in, then pick a game...</h1>

            <h3>Games</h3>
            <Slider sessionStart={sessionStart} setSessionStart={setSessionStart} isLoggedIn={isLoggedIn} />

            <h3 id="about-us">About Us</h3>
            <p id="about">House of Cardz is your one-stop-shop for all things card games! Test yourself against the dealer in Blackjack, get a group of friends and play Bridge (coming soon) together, 
                or go solo and play a few rounds of Solitaire (coming soon)!
            </p>


            {/* <p id="feedback-form">Fill out our <a href="#">feedback form</a> to request new games/ improvements</p> */}
        </div>
    )
}

export default HomeContainer;