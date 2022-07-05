import "../styles/Slider.css"
import blackjack from "../img/CA.png"
import poker from "../img/SQ.png"
import hearts from "../img/H5.png"
import rummy from "../img/S2.png"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import {BrowserRouter as Router, Link} from "react-router-dom";

const Slider = ({setSessionStart,sessionStart}) => {

    let carousel = {};
    carousel.e = document.getElementById('carousel');
    carousel.items = document.getElementById('carousel-items');
    carousel.leftScroll = document.getElementById('left-scroll-button');
    carousel.rightScroll = document.getElementById('right-scroll-button');  

    const scroll = (element, step) => {
        element.scrollLeft += step;
    }

    const leftScrollClick = () => {
        console.log("clicked");
        scroll(carousel.items, -100);
    }

    const rightScrollClick = () => {
        scroll(carousel.items, 100);
    }

    const handleSessionStart = () => {
        setSessionStart(true)
        console.log('session start');
    }




    return (
        <div id="carousel" className="container">
            <div className="control-container">
          
                <div id="left-scroll-button" className="left-scroll">
                        <i className="chevron-left" aria-hidden="true">
                        <FaArrowAltCircleLeft className="chevron-left" onClick={leftScrollClick}/>
                        </i>
                </div>

                <div id="right-scroll-button" className="right-scroll">
                        <i className="chevron-right" aria-hidden="true">
                        <FaArrowAltCircleRight className="chevron-right" onClick={rightScrollClick}/>
                        </i>
                </div>
            </div>
        
        <div className="items" id="carousel-items">

            <div className="item"> 
                <Link to={'/blackjack'} onClick={handleSessionStart}>
                <img className="item-image" alt="blackjackCover" src={blackjack} />
                <span className="item-title">BlackJack</span>
                </Link>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Poker</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="heartsCover" src={hearts} />
                <span className="item-title">Hearts</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Go Fish</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="rummyCover" src={rummy} />
                <span className="item-title">Rummy</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={blackjack} />
                <span className="item-title">Sevens</span>
            </div>

            <div className="item" > 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Canaster</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Bridge</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={blackjack} />
                <span className="item-title">Solataire</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Crazy Eights</span>
            </div>

            <div className="item" > 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Cheat</span>
            </div>

            <div className="item" > 
                <img className="item-image" alt="pokerCover" src={rummy} />
                <span className="item-title">BlackJack</span>
            </div>
        </div>
        </div>
    );

}

export default Slider;