import { takeCard, cardValue, createImgCard } from "./";
/**
 * 
 * @param {Number} min_score Min score to reach by the computer player to win
 * @param {Array<String>} deck deck array
 */
export const computerTurn = (min_score, deck) => {
    const computerCards = document.querySelector('#computer-cards');
    const computerScoreboard = document.querySelector('#computer_scoreboard');
    let pc_score = 0;
    do {
        const card = takeCard(deck);
        pc_score += cardValue(card);
        computerScoreboard.textContent = pc_score;

        // Append created card to computer hand
        const card_element = createImgCard(card);
        computerCards.append(card_element);
        if (min_score > 21) {
            break;
        }

    } while (pc_score < min_score && pc_score <= 21);


    setTimeout(() => {
        pc_score === min_score ? alert('Empate')
            : (pc_score > 21) ? alert('Jugador 1 gana.')
                : (min_score > 21) ? alert('La computadora ganó.')
                    : alert('La computadora gana.')
    }, 100);

}