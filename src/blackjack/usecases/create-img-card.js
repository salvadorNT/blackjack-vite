/**
 * 
 * @param {String} card Example: 2H, KC, 5C, 6D... etc
 * @returns {HTMLImageElement} img element
 */
export const createImgCard = (card) => {
    const card_element = document.createElement('img');
    card_element.classList.add('game-card');
    card_element.src = 'assets/cards/' + card + '.png';
    return card_element;
}