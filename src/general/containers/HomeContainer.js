import Slider from "../Slider";

const HomeContainer = ({ sessionStart, setSessionStart }) => {

    return (

        <>
            <h1>House of Cardzzzzzz</h1>
            <p>Gamblin is k00l</p>
            <Slider sessionStart={sessionStart} setSessionStart={setSessionStart} />
        </>
    )
}

export default HomeContainer;