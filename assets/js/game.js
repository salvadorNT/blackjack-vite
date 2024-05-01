/*
    Available cards
    2C-10C Clubs
    2D-10D Diamonds
    2H-10H Hearts
    2S-10S Spades
*/
let deck = [];
let card_types = ['C', 'D', 'H', 'S'];
let aces = ['A', 'J', 'Q', 'K']

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
}
