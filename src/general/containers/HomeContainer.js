import Slider from "../Slider";

const HomeContainer = ({ sessionStart, setSessionStart }) => {

    return (

        <div id="home">
            <h1>Welcome</h1>

            <h3>Games</h3>
            <Slider sessionStart={sessionStart} setSessionStart={setSessionStart} />

            <h3>About Us</h3>
            <p>House of Cardz is your one-stop-shop for all things card games! Test yourself against the dealer in Blackjack, get a group of friends and play Bridge (coming soon) together, 
                or go solo and play a few rounds of Solitaire (coming soon)!
            </p>

            <p>fill out our <a href="#">feedback form</a> to request new games/ improvements</p>
        </div>
    )
}

export default HomeContainer;