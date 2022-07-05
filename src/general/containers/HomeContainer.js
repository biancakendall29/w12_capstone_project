import Slider from "../Slider";

const HomeContainer = ({ sessionStart, setSessionStart }) => {
  
    return(

        <>
           <Slider sessionStart={sessionStart} setSessionStart={setSessionStart}/>
        </>
    )
}

export default HomeContainer;