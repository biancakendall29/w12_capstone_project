const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

const createDeck = () => {
    const deck = [];
    for(let i = 0 ; i < suits.length; i++){

        for(let j = 0; j < values.length;j++){
            
            let code =  suits[i].substring(0,1) + values[j]
            let card = { suit: suits[i], value: values[j] , code: code}
            deck.push(card)
        }
    }
    return deck
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

const drawCard = (deck,dest) => {
    dest.push(deck.pop())
}

module.exports = {createDeck, shuffle, drawCard}
