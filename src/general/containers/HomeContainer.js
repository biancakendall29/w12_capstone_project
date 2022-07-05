import Slider from "../Slider";

const HomeContainer = ({ sessionStart, setSessionStart, isLoggedIn }) => {

    return (

        <>
            <h1>House of Cardzzzzzz</h1>
            <p>Gamblin is k00l</p>
            {isLoggedIn ? <Slider sessionStart={sessionStart} setSessionStart={setSessionStart} isLoggedIn={isLoggedIn} /> : <></>}
        </>
    )
}

export default HomeContainer;