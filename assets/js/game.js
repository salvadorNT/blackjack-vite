(() => {
    'use strict'

    /*
    Available cards
    2C-10C Clubs
    2D-10D Diamonds
    2H-10H Hearts
    2S-10S Spades
*/
    let deck = [];
    let player_score = 0, pc_score = 0;
    let card_types = ['C', 'D', 'H', 'S'];
    let aces = ['A', 'J', 'Q', 'K']

    // HTML references
    const btn_take_card = document.querySelector('#btnTakeCard');
    const btn_stand = document.querySelector('#btnStop');
    const btn_new_game = document.querySelector('#btnNewGame');
    const playerScoreboard = document.querySelector('#player_scoreboard');
    const computerScoreboard = document.querySelector('#computer_scoreboard');
    const playerCards = document.querySelector('#player1-cards');
    const computerCards = document.querySelector('#computer-cards');

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

    const createImgCard = (card) => {
        const card_element = document.createElement('img');
        card_element.classList.add('game-card');
        card_element.src = 'assets/cards/' + card + '.png';
        return card_element;
    }

    const computerTurn = (min_score) => {
        do {
            const card = takeCard();
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
            pc_score === player_score ? alert('Empate')
                : (pc_score > 21) ? alert('Jugador 1 gana.')
                    : (player_score > 21) ? alert('La computadora ganó.')
                        : alert('La computadora gana.')
        }, 100);

    }

    const disableButtons = () => {
        btn_stand.disabled = true;
        btn_take_card.disabled = true;
    }

    // Events

    btn_take_card.addEventListener('click', () => {
        btn_stand.disabled = false;
        const card = takeCard();
        player_score += cardValue(card);
        playerScoreboard.textContent = player_score;

        // Append created card to player 1
        const card_element = createImgCard(card);
        playerCards.append(card_element);

        if (player_score > 21) {
            disableButtons();
            btn_take_card.disabled = true;
            computerTurn(player_score);
        } else if (player_score === 21) {
            disableButtons();
            computerTurn(player_score);
        }

    });

    btn_stand.addEventListener('click', () => {
        disableButtons();
        computerTurn(player_score);

    });

    btn_new_game.addEventListener('click', () => {
        btn_take_card.disabled = false;
        btn_stand.disabled = false;

        deck = []
        playerScoreboard.textContent = 0;
        computerScoreboard.textContent = 0;
        player_score = 0, pc_score = 0;
        playerCards.innerHTML = '';
        computerCards.innerHTML = '';

        createDeck();
    });

    createDeck();

})();
