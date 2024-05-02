/*
    Available cards
    2C-10C Clubs
    2D-10D Diamonds
    2H-10H Hearts
    2S-10S Spades
*/
let deck = [];
let player_hand = [];
let card_types = ['C', 'D', 'H', 'S'];
let aces = ['A', 'J', 'Q', 'K']

// Creates new deck
const createDeck = () => {
    for (let index = 2; index <= 10; index++) {
        for (const card_type of card_types) {
            deck.push(index + card_type);
        }
    }
    for (const card_type of card_types) {
        for (const ace of aces) {
            deck.push(ace + card_type);
        }
    }
    deck = _.shuffle(deck);
}

// Take card from the deck
const takeCard = () => {
    if (deck.length === 0) {
        throw 'There are no more cards.';
    }
    let random_position = Math.floor(Math.random() * deck.length);
    return deck.splice(random_position, 1)[0];
}


// Retun numeric value of the card given
const cardValue = (card) => {
    let card_value = card.substring(0, card.length - 1)
    return (isNaN(card_value)) ?
        (card_value === 'A') ? 11 : 10
        : card_value * 1
}

createDeck();
takeCard();
console.log(deck);