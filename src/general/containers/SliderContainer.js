import blackjackCover from "../../img/blackjackCover.png"
import pokerCover from "../../img/pokerCover.jpg"
import "../../styles/Slider.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import { useEffect } from "react"

const SliderContainer = () => {

    const MouseWheelHandler = (e, element) => {
        let delta = 0;
        if (typeof e === 'number') {
            delta = e;
        } 
        else {
            if (e.deltaX !== 0) {
            delta = e.deltaX;
        } 
        else {
            delta = e.deltaY;
        }
        e.preventDefault();
        }
       element.scrollLeft -= (delta);
    }

        let carousel = {};
        // const loading = () => {
        useEffect = () => {
        carousel.e = document.getElementById('carousel');
        carousel.items = document.getElementById('carousel-items');
        carousel.leftScroll = document.getElementById('left-scroll-button');
        carousel.rightScroll = document.getElementById('right-scroll-button');    

        // carousel.items.addEventListener("mousewheel", handleMouse, false);
        // carousel.items.addEventListener("scroll", scrollEvent);
        // carousel.leftScroll.addEventListener("click", leftScrollClick);
        // carousel.rightScroll.addEventListener("click", rightScrollClick);

        setLeftScrollOpacity();
        setRightScrollOpacity();

        }

       const handleMouse = (e) => {
        MouseWheelHandler(e, carousel.items);
        }
       const leftScrollClick = () => {
        MouseWheelHandler(100, carousel.items);
        }
       const rightScrollClick = () => {
        MouseWheelHandler(-100, carousel.items);
        }
       const scrollEvent = (e) => {
        setLeftScrollOpacity();
        setRightScrollOpacity();
        }
       const setLeftScrollOpacity = () => {
            if (isScrolledAllLeft()) {
                carousel.leftScroll.style.opacity = 0;
            } 
            else {
                carousel.leftScroll.style.opacity = 1;
            }
        }
       const isScrolledAllLeft = () => {
        if (carousel.items.scrollLeft === 0) {
            return true;
        } 
        else {
            return false;
        }
        }
       const isScrolledAllRight = () => {
        if (carousel.items.scrollWidth > carousel.items.offsetWidth) {
            if (carousel.items.scrollLeft + carousel.items.offsetWidth === carousel.items.scrollWidth) {
                return true;
            }
        } 
        else {
            return true;
        }
        return false;
        }
       const setRightScrollOpacity = () => {
            if (isScrolledAllRight()) {
                carousel.rightScroll.style.opacity = 0;
            } 
            else {
                carousel.rightScroll.style.opacity = 1;
            }
        }


    return (
        <div id="carousel" className="container">
            <div className="control-container">
                <div id="left-scroll-button" className="left-scroll button scroll" onClick={() => leftScrollClick}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    {/* <FaArrowAltCircleLeft className="fa fa-chevron-right" onClick={leftScrollClick}/> */}
                </div>
                <div id="right-scroll-button" className="right-scroll button scroll" onClick={() => rightScrollClick}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    {/* <FaArrowAltCircleRight className="fa fa-chevron-right" onClick={rightScrollClick}/> */}
                </div>
            </div>
        
        <div className="items" id="carousel-items">

            <div className="item"> 
                <img className="item-image" alt="blackjackCover" src={blackjackCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div>

        </div>
        </div>
    );
}

export default SliderContainer;