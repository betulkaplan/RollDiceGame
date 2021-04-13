const score0Elm = document.getElementById("score--0");
const score1Elm = document.getElementById("score--1");
const roll_dice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const currentScoreElms = document.querySelectorAll('.current-score');
const sectionPlayers = document.querySelectorAll('.player');
const playerScoresElms = document.querySelectorAll('.score');

const scores = [0 ,0];


const dice = document.querySelector('.dice');
dice.classList.add('hidden');

let currentScore = 0;



roll_dice.addEventListener('click', clickRollDice);

btnHold.addEventListener('click', clickBtnHold);

let activePlayer = 0; //

function clickRollDice(){
    console.log(currentScoreElms[activePlayer]);
    console.log(activePlayer);
    dice.classList.remove('hidden');
    const diceNumber = Math.trunc(Math.random()*6+1);

    dice.src = `dice-${diceNumber}.png`;
    if(diceNumber === 1){
        currentScore = 0;
        currentScoreElms[activePlayer].textContent = currentScore;
        activePlayer = 1 - activePlayer;
        sectionPlayers[0].classList.toggle('player--active'); 
        sectionPlayers[1].classList.toggle('player--active'); 
    }
    currentScore += diceNumber;
    currentScoreElms[activePlayer].textContent = currentScore;

};

function clickBtnHold(){

    scores[activePlayer] += currentScore;
    playerScoresElms[activePlayer].textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        sectionPlayers[activePlayer].classList.add('player--winner');
        btnHold.removeEventListener('click', clickBtnHold);
        roll_dice.removeEventListener('click', clickRollDice);

    }
    else{
        currentScore = 0;
        currentScoreElms[activePlayer].textContent = 0;
        //debugger;
        activePlayer = 1 - activePlayer;
        sectionPlayers[0].classList.toggle('player--active'); 
        sectionPlayers[1].classList.toggle('player--active');
    }
     

};

const btnNew = document.querySelector('.btn--new');

btnNew.addEventListener('click', newGame);

function newGame(){
    scores[0] = 0;
    scores[1] = 0;

    playerScoresElms[0].textContent = 0;
    playerScoresElms[1].textContent = 0;
    currentScoreElms[0].textContent = 0;
    currentScoreElms[1].textContent = 0;
    roll_dice.addEventListener('click', clickRollDice);
    btnHold.addEventListener('click', clickBtnHold);

    sectionPlayers[0].classList.remove('player--winner');
    sectionPlayers[1].classList.remove('player--winner');
    sectionPlayers[0].classList.add('player--active');
    sectionPlayers[1].classList.remove('player--acrive');

    dice.classList.add('hidden');
    console.log('hye');

}


