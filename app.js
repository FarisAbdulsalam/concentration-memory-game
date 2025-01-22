/*-------------- Constants -------------*/
const emojiArr = ["❤️", "😍", "🐏", "🐄"]

/*---------- Variables (state) ---------*/

let gameState = false;
let points = 0;
let attempts = 8;
let cardOne = '';
let cardTwo = '';
let winningScore = 4;
let maxAttempts = 6;
/*----- Cached Element References  -----*/
const board = document.getElementById('board');
const moves = document.getElementById('moves');
const score = document.getElementById('score');
const start = document.querySelector('button');
const countDownElement = document.getElementById('countdown-display');
const startGameElement = document.querySelector('#startGame');
const winMessage = document.getElementById('winMessage');
const failMessage = document.getElementById('failMessage');
/*-------------- Functions -------------*/

// initialize variables, generate game board, show score/move counters
const initialize = () => {
    if(gameState === false){
        gameState = true;
        points = 0;
        attempts = 6;
        cardOne = '';
        cardTwo = '';
        moves.classList.remove('hidden');
        score.classList.remove('hidden');
        moves.classList.add('show');
        score.classList.add('show');
        moves.innerHTML = `${attempts}/${maxAttempts} moves remaining`;
        score.innerHTML = `Score: ${points}/${winningScore}`;
        generateBoard();
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.addEventListener('click', play);
        })
    }
}
// function to start the game by calling initialize
const startGame = () => {
    initialize();
}

// randomizes the cards and generates a div for each card
const generateBoard = () => {
    let cardArr = [];
    for (let i = 0; i < emojiArr.length; i++) {
        let card1 = document.createElement('div');
        let card2 = document.createElement('div');
        card1.textContent = emojiArr[i];
        card1.classList.add('card');
        card1.classList.add('cardBack');
        card2.textContent = emojiArr[i];
        card2.classList.add('card');
        card2.classList.add('cardBack');
        cardArr.push(card1);
        cardArr.push(card2);
    }
    let shuffled = cardArr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    
    shuffled.forEach((card) => {
        board.appendChild(card)
      }
    )
}
// takes value of card clicked and passes it to compareCards function
const play = (event) => {
    if(cardTwo !== ''){
        return;
    }
    if(cardOne === ''){
        cardOne = event.target;
        event.target.classList.add('cardFront')
    } else if (cardOne === event.target) {
        return;
    }   
      else {
        compareCards(event.target)
    }
    console.log(moves.target);
    moves.innerHTML = `${attempts}/${maxAttempts} moves remaining`;
    score.innerHTML = `Score: ${points}/${winningScore}`;
}

// compares cards and adjusts moves/score accordingly
const compareCards = (emoji) => {
    emoji.classList.add('cardFront')
    cardTwo = emoji;
    if(cardOne.textContent === cardTwo.textContent){
        points++;
        if(points >= winningScore){
            winMessage.classList.remove('hidden');
            winMessage.classList.add('show');
            gameState = false;
        }
        cardOne = '';
        cardTwo = '';
        console.log("yippiee it's a match")
     } else{
        attempts--;
        if(attempts === 0){
            failMessage.classList.remove('hidden');
            failMessage.classList.add('show');
            gameState = false;
        }
        console.log("not a match :(")
        setTimeout(() =>{
            cardTwo.classList.remove('cardFront');
            cardOne.classList.remove('cardFront');
            cardOne = '';
            cardTwo = '';
        }, 1000);
    }
}

/*----------- Event Listeners ----------*/

startGameElement.addEventListener('click', startGame); // event listener for clicking the cards

/*----------- Code Graveyard ------------*/
//event.target.classList.remove('cardFront')
//likeButtonElement.addEventListener('click', printSomething);
// cards.forEach(card => {
//     card.addEventListener('click', play);
// })
// emoji.classList.remove('cardFront')
// cardOne = '';
// cardTwo = '';
// emoji.classList.toggle('cardFront')
//const likeButtonElement = document.querySelector('#like-button');
// const cardClick = document.getElementById(".card");
//let indices = [0,1,2,3,4,5];
// indices = [...indices, ...indices];
// indices.sort(() => Math.random() - 0.5);
// console.log(indices);