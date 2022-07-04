import HA from "../img/HA.png";
import H2 from "../img/H2.png";
import H3 from "../img/H3.png";
import H4 from "../img/H4.png";
import H5 from "../img/H5.png";
import H6 from "../img/H6.png";
import H7 from "../img/H7.png";
import H8 from "../img/H8.png";
import H9 from "../img/H9.png";
import H10 from "../img/H10.png";
import HJ from "../img/HJ.png";
import HQ from "../img/HQ.png";
import HK from "../img/HK.png";
import CA from "../img/CA.png";
import C2 from "../img/C2.png";
import C3 from "../img/C3.png";
import C4 from "../img/C4.png";
import C5 from "../img/C5.png";
import C6 from "../img/C6.png";
import C7 from "../img/C7.png";
import C8 from "../img/C8.png";
import C9 from "../img/C9.png";
import C10 from "../img/C10.png";
import CJ from "../img/CJ.png";
import CQ from "../img/CQ.png";
import CK from "../img/CK.png";
import DA from "../img/DA.png";
import D2 from "../img/D2.png";
import D3 from "../img/D3.png";
import D4 from "../img/D4.png";
import D5 from "../img/D5.png";
import D6 from "../img/D6.png";
import D7 from "../img/D7.png";
import D8 from "../img/D8.png";
import D9 from "../img/D9.png";
import D10 from "../img/D10.png";
import DJ from "../img/DJ.png";
import DQ from "../img/DQ.png";
import DK from "../img/DK.png";
import SA from "../img/SA.png";
import S2 from "../img/S2.png";
import S3 from "../img/S3.png";
import S4 from "../img/S4.png";
import S5 from "../img/S5.png";
import S6 from "../img/S6.png";
import S7 from "../img/S7.png";
import S8 from "../img/S8.png";
import S9 from "../img/S9.png";
import S10 from "../img/S10.png";
import SJ from "../img/SJ.png";
import SQ from "../img/SQ.png";
import SK from "../img/SK.png";
import backOfCard from "../img/card-back.png";
import "../img/avatar1.png"


const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

const createDeck = () => {
    const deck = [];
    for(let i = 0 ; i < suits.length; i++){

        for(let j = 0; j < values.length;j++){
            
            let weight = parseInt(values[j])
            if (values[j] === "J" || values[j] === "Q" || values[j] === "K"){ weight = 10}
            if (values[j] === "A"){ weight = 1}
            let code =  suits[i].substring(0,1) + values[j];
            let card = { suit: suits[i], value: values[j] , code: code, weight: weight};
            deck.push(card)
        }
    }
    return deck;
}

const shuffle = (array) => {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    }

    return array;
}

const displayAvatar = (avatarNumber) => {
    return (
        <img src={"../img/avatar" + avatarNumber + ".png"}/>
    )
}

const displayImages = (cards) => {
    return cards.map((card, index) => {
        let findImage;
        switch (card.code) {
            case "HA":
                findImage = HA;
            break;

            case "H2":
                findImage = H2;
            break;

            case "H3":
                findImage = H3;
            break;

            case "H4":
                findImage = H4;
            break;

            case "H5":
                findImage = H5;
            break;

            case "H6":
                findImage = H6;
            break;

            case "H7":
                findImage = H7;
            break;

            case "H8":
                findImage = H8;
            break;

            case "H9":
                findImage = H9;
            break;

            case "H10":
                findImage = H10;
            break;

            case "HJ":
                findImage = HJ;
            break;

            case "HQ":
                findImage = HQ;
            break;

            case "HK":
                findImage = HK;
            break;

            case "CA":
                findImage = CA;
            break;

            case "C2":
                findImage = C2;
            break;

            case "C3":
                findImage = C3;
            break;

            case "C4":
                findImage = C4;
            break;

            case "C5":
                findImage = C5;
            break;

            case "C6":
                findImage = C6;
            break;

            case "C7":
                findImage = C7;
            break;

            case "C8":
                findImage = C8;
            break;

            case "C9":
                findImage = C9;
            break;

            case "C10":
                findImage = C10;
            break;

            case "CJ":
                findImage = CJ;
            break;

            case "CQ":
                findImage = CQ;
            break;

            case "CK":
                findImage = CK;
            break;

            case "DA":
                findImage = DA;
            break;

            case "D2":
                findImage = D2;
            break;

            case "D3":
                findImage = D3;
            break;

            case "D4":
                findImage = D4;
            break;

            case "D5":
                findImage = D5;
            break;

            case "D6":
                findImage = D6;
            break;

            case "D7":
                findImage = D7;
            break;

            case "D8":
                findImage = D8;
            break;

            case "D9":
                findImage = D9;
            break;

            case "D10":
                findImage = D10;
            break;

            case "DJ":
                findImage = DJ;
            break;

            case "DQ":
                findImage = DQ;
            break;

            case "DK":
                findImage = DK;
            break;

            case "SA":
                findImage = SA;
            break;

            case "S2":
                findImage = S2;
            break;
            
            case "S3":
                findImage = S3;
            break;

            case "S4":
                findImage = S4;
            break;

            case "S5":
                findImage = S5;
            break;

            case "S6":
                findImage = S6;
            break;

            case "S7":
                findImage = S7;
            break;

            case "S8":
                findImage = S8;
            break;

            case "S9":
                findImage = S9;
            break;

            case "S10":
                findImage = S10;
            break;

            case "SJ":
                findImage = SJ;
            break;

            case "SQ":
                findImage = SQ;
            break;

            case "SK":
                findImage = SK;
            break;
        }

        return (
            <>
            <div className="card" data-flip="no">
                <img className="card-back" alt="Back of card" src={backOfCard}/>
                <img
                    className="card-front"
                    id={index}
                    alt={JSON.stringify(card)}
                    src={findImage}
                />
            </div>
            </>
        );
    });
};

export {createDeck, shuffle, displayImages};