import blackjack from "../img/CA.png"
import poker from "../img/SQ.png"
import hearts from "../img/H5.png"
import rummy from "../img/S2.png"
import bridge from "../img/D9.png"
import canaster from "../img/CJ.png"
import sevens from "../img/H3.png"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import {BrowserRouter as Router, Link} from "react-router-dom";

const Slider = ({setSessionStart,sessionStart,setUser,user,users,isLoggedIn}) => {

    // let carousel = {};
    // carousel.e = document.getElementById('carousel');
    let carouselItems = {};
    // carouselItems = document.getElementById('carousel-items');
    carouselItems = document.querySelector('.items');
    let items_count = document.getElementsByClassName('item');
    let step_count = 0;

    const scroll = (el, step) => {
        console.log(step);
        console.log(el);
        // el.scrollLeft += step;
        el.scrollBy(step, 0);
    }

    const leftScrollClick = () => {
        console.log("clicked");
        scroll(carouselItems, -260);
        console.log(items_count.length);
        // step_count--;
        // if(step_count <= 0) {
        //     scroll(document.getElementById('carousel-items'), 260*items_count.length)
        //     step_count = items_count.length;
        // }
    }

    const rightScrollClick = () => {
        scroll(carouselItems, 260);
        // step_count++;
        // if(step_count >= items_count.length) {
        //     scroll(document.getElementById('carousel-items'), -260*items_count.length)
        //     step_count = 0;
        // }
    }

    const handleSessionStart = () => {
        setSessionStart(true)
        console.log('session start');
    }

    return (
        <div id="carousel" className="slider-container">
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

            
                <Link id="blackjack-link" to={'/blackjack'} onClick={handleSessionStart}>
                <div className="item"> 
                <img className="item-image" alt="blackjackCover" src={blackjack} />
                <span className="item-title">BlackJack</span>
                </div>
                </Link>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <span className="item-title">Poker</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="heartsCover" src={hearts} />
                <span className="item-title">Hearts</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="rummyCover" src={rummy} />
                <span className="item-title">Rummy</span>
            </div>

            <div className="item"> 
                <img className="item-image" alt="sevensCover" src={sevens} />
                <span className="item-title">Sevens</span>
            </div>

            <div className="item" > 
                <img className="item-image" alt="canasterCover" src={canaster} />
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