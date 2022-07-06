import blackjack from "../img/CA.png"
import poker from "../img/SQ.png"
import hearts from "../img/H5.png"
import rummy from "../img/S2.png"
import bridge from "../img/D9.png"
import canaster from "../img/CJ.png"
import sevens from "../img/H3.png"
import solataire from "../img/S10.png"
import cheat from "../img/S6.png"
import whist from "../img/HQ.png"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import {BrowserRouter as Router, Link} from "react-router-dom";

const Slider = ({setSessionStart,sessionStart,setUser,user,users,isLoggedIn}) => {


    let carouselItems = {};
    carouselItems = document.querySelector('.items');
    let items_count = document.getElementsByClassName('item');
    let step_count = 0;

    const scroll = (el, step) => {
        console.log(step);
        console.log(el);
        el.scrollBy(step, 0);
    }

    const leftScrollClick = () => {
        console.log("clicked");
        scroll(carouselItems, -160);
        console.log(items_count.length);
    }

    const rightScrollClick = () => {
        scroll(carouselItems, 160);
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

            {isLoggedIn ?
                <>
                <Link id="blackjack-link" to={'/blackjack'} onClick={handleSessionStart}>
                <div className="item"> 
                <img className="item-image" alt="blackjackCover" src={blackjack} />
                <p className="item-title">BlackJack</p>
                </div>
                </Link>

                <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <p className="item-title">Poker</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="heartsCover" src={hearts} />
                <p className="item-title">Hearts</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="rummyCover" src={rummy} />
                <p className="item-title">Rummy</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="sevensCover" src={sevens} />
                <p className="item-title">Sevens</p>
                </div>

                <div className="item" > 
                <img className="item-image" alt="canasterCover" src={canaster} />
                <p className="item-title">Canasta</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="bridgeCover" src={bridge} />
                <p className="item-title">Bridge</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="saltaireCover" src={solataire} />
                <p className="item-title">Solataire</p>
                </div>

                <div className="item" > 
                <img className="item-image" alt="cheatCover" src={cheat} />
                <p className="item-title">Cheat</p>
                </div>

                <div className="item" > 
                <img className="item-image" alt="whistCover" src={whist} />
                <p className="item-title">Whist</p>
                </div>
                </>

                :
                <>
                 <div className="item"> 
                    <img className="item-image" alt="blackjackCover" src={blackjack} />
                    <p className="sign-in-message">Sign in to play blackjack</p>
                </div>                
                
                <div className="item"> 
                <img className="item-image" alt="pokerCover" src={poker} />
                <p className="sign-in-message">Sign in to play Poker</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="heartsCover" src={hearts} />
                <p className="sign-in-message">Sign in to play Hearts</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="rummyCover" src={rummy} />
                <p className="sign-in-message">Sign in to play Rummy</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="sevensCover" src={sevens} />
                <p className="sign-in-message">Sign in to play Sevens</p>
                </div>

                <div className="item" > 
                <img className="item-image" alt="canasterCover" src={canaster} />
                <p className="sign-in-message">Sign in to play Canasta</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="bridgeCover" src={bridge} />
                <p className="sign-in-message">Sign in to play Bridge</p>
                </div>

                <div className="item"> 
                <img className="item-image" alt="solatireCover" src={solataire} />
                <p className="sign-in-message">Sign in to play Solataire</p>
                </div>

                <div className="item" > 
                <img className="item-image" alt="cheatCover" src={cheat} />
                <p className="sign-in-message">Sign in to play Cheat</p>
                </div>

                <div className="item" > 
                <img className="item-image" alt="whistCover" src={whist} />
                <p className="sign-in-message">Sign in to play Whist</p>
                </div>


                </>
            }     

            
        </div>
        </div>
    );

}

export default Slider;