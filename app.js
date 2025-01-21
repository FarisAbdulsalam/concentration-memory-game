// add the rest of the cards in html
// add event listener to the pink card so that it prints "something" in the console
// create a 'play' function
// play function should add the class of cardBack to the card (from the click event)
// click on card - it gets saved
// write compare function
// compare function should check if saved card and clicked card have same textContent

/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let indices = [0,1,2,3,4,5];
let gameState = false;
let score = 0;
let attempts = 8;
let cardOne = '';
let cardTwo = '';
let match = null;

/*----- Cached Element References  -----*/
const cards = document.querySelectorAll(".card");
const board = document.querySelector('.board');
const moves = document.querySelector('.moves');
const timer = document.querySelector('.timer');
const start = document.querySelector('button');
const win = document.querySelector('.win');
const countDownElement = document.getElementById('countdown-display');
//const likeButtonElement = document.querySelector('#like-button');
const cardClick = document.getElementById(".card");
const startGameElement = document.querySelector('#startGame')

/*-------------- Functions -------------*/
const initialize = () => {
    if(gameState === false){
        gameState = true;
        indices = [...indices, ...indices];
        indices.sort(() => Math.random() - 0.5);
        console.log(indices);
        score = 0;
        attempts = 8;
        cardOne = '';
        cardTwo = '';
        match = null;
    }

}

const startGame = () => {
    initialize();
}

const play = (event) => {
    console.log(cardOne);
    if(cardOne === ''){
        cardOne = event.target;
        event.target.classList.add('cardFront')
    }   else{
        compareCards(event.target)
    }
    //event.target.classList.remove('cardFront')
}

const compareCards = (emoji) => {
    emoji.classList.add('cardFront')
    cardTwo = emoji;
    if(cardOne.textContent === cardTwo.textContent){
        match = true;
        score++;
        attempts--;
        cardOne = '';
        cardTwo = '';
        console.log("yippiee it's a match")
        // emoji.classList.toggle('cardFront')
     } else{
        match = false;
        attempts--;
        // cardOne = '';
        // cardTwo = '';
        console.log("not a match :(")
        setTimeout(() =>{
            cardTwo.classList.remove('cardFront');
            cardOne.classList.remove('cardFront');
            cardOne = '';
            cardTwo = '';
        }, 2000);
    }
    // emoji.classList.remove('cardFront')
}

/*----------- Event Listeners ----------*/
//likeButtonElement.addEventListener('click', printSomething);
cards.forEach(card => {
    card.addEventListener('click', play);
})
startGameElement.addEventListener('click', startGame);