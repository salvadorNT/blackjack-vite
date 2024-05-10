/**
 * Retun numeric value of the card given
 * @param {String} card Example: 2H, KC, 5C, 6D... etc
 * @returns {Number} returns the numeric value of the given card
 */
export const cardValue = (card) => {
  if (!card || (typeof (card) !== 'string')) {
    throw Error('card is required as a string')
  }
  let card_value = card.substring(0, card.length - 1)
  return (isNaN(card_value)) ?
    (card_value === 'A') ? 11 : 10
    : card_value * 1
}