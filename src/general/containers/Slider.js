import "../../styles/Slider.css"
import blackjackCover from "../../img/blackjackCover.png"
import pokerCover from "../../img/pokerCover.jpg"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const Slider = () => {

    const leftScrollClick = () => {

    }

    const rightScrollClick = () => {

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

            {/* <div className="item"> 
                <img className="item-image" alt="blackjackCover" src={blackjackCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
            </div> */}

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>


            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

            <div className="item"> 
                <img className="item-image" alt="pokerCover" src={pokerCover} />
                <span className="item-title">BlackJack</span>
                <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                {/* <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div> */}
            </div>

        </div>
        </div>
    );

}

export default Slider;