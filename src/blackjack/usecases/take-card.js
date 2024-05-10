/**
 * This function returns a random card from the given deck
 * @param {Array<String>} deck
 * @returns {Sting} a card from the deck array
 */
export const takeCard = (deck) => {
  if (deck.length === 0) {
    throw 'There are no more cards.';
  }
  let random_position = Math.floor(Math.random() * deck.length);
  console.log(deck);
  return deck.splice(random_position, 1)[0];
}