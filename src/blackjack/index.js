import _ from 'underscore';
import { cardValue, createDeck, computerTurn, takeCard, createImgCard } from './usecases'

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
    let card_types = ['C', 'D', 'H', 'S'],
        aces = ['A', 'J', 'Q', 'K'];

    // HTML references
    const btn_take_card = document.querySelector('#btnTakeCard');
    const btn_stand = document.querySelector('#btnStop');
    const btn_new_game = document.querySelector('#btnNewGame');
    const playerScoreboard = document.querySelector('#player_scoreboard');
    const computerScoreboard = document.querySelector('#computer_scoreboard');
    const playerCards = document.querySelector('#player1-cards');
    const computerCards = document.querySelector('#computer-cards');

    // Initialize game
    const initGame = () => {
        deck = createDeck(card_types, aces);
    }




    const disableButtons = () => {
        btn_stand.disabled = true;
        btn_take_card.disabled = true;
    }

    // Events

    btn_take_card.addEventListener('click', () => {
        btn_stand.disabled = false;
        const card = takeCard(deck);
        player_score += cardValue(card);
        playerScoreboard.textContent = player_score;

        // Append created card to player 1
        const card_element = createImgCard(card);
        playerCards.append(card_element);

        if (player_score > 21) {
            disableButtons();
            btn_take_card.disabled = true;
            computerTurn(player_score, deck);
        } else if (player_score === 21) {
            disableButtons();
            computerTurn(player_score, deck);
        }

    });

    btn_stand.addEventListener('click', () => {
        disableButtons();
        computerTurn(player_score, deck);

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

        initGame();
    });

    initGame();

})();
