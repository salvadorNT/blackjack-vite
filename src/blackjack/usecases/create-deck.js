import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<string>} card_types Example: ['C', 'D', 'H', 'S']
 * @param {Array<string>} aces Example: ['A', 'J', 'Q', 'K']
 * @returns Array<string> return a new deck shuffled with 52 cards
 */
const createDeck = (card_types, aces) => {

    if (!card_types || !Array.isArray(card_types)) throw new Error('card_types is required as a string array');
    if (!aces || !Array.isArray(aces)) throw new Error('aces is required as a string array');


    let deck = [];
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
    return _.shuffle(deck);
}

export default createDeck;