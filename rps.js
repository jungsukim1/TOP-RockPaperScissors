let computerChoice;
let playerChoice;
let bobCounter = 0;
let playerCounter = 0;
const armor = document.querySelector('#Armor');
const bow = document.querySelector('#Bow');
const sword = document.querySelector('#Sword');
const result = document.querySelector('#result');
const bobArmor = document.querySelector('#bobArmor');
const bobBow = document.querySelector('#bobBow');
const bobSword = document.querySelector('#bobSword');
const bobScore = document.querySelector('#bobPoints');
const playerScore = document.querySelector('#playerPoints');
const bob = document.querySelector('#bob');
const winner = document.querySelector('#winner');

function getComputerChoice(){
    let choosing = Math.floor(Math.random() * 3);
    switch(choosing){
        case 0:
            computerChoice = "Rock";
            bobArmor.setAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            bobBow.removeAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            bobSword.removeAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            break;
        case 1:
            computerChoice = "Paper";
            bobBow.setAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            bobArmor.removeAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            bobSword.removeAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            break;
        case 2:
            computerChoice = "Scissors";
            bobSword.setAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            bobArmor.removeAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            bobBow.removeAttribute('style', 'box-shadow: inset 0 0 20px purple, 0 0 20px purple;');
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if(computerSelection === "Rock" && playerSelection === "SCISSORS"){
        result.textContent = 'Bob Won!';
        bobCounter++;
        playerTakeHit();
        bobScore.textContent = bobCounter;
    }else if(computerSelection === "Paper" && playerSelection === "SCISSORS"){
        result.textContent = 'You Won!';
        bobTakeHit();
        playerCounter++;
        playerScore.textContent = playerCounter;
    }else if(computerSelection === "Rock" && playerSelection === "PAPER"){
        result.textContent = 'You Won!';
        bobTakeHit(); 
        playerCounter++;
        playerScore.textContent = playerCounter;
    }else if(computerSelection === "Scissors" && playerSelection === "PAPER"){
        result.textContent = 'Bob Won!';
        bobCounter++;
        playerTakeHit();
        bobScore.textContent = bobCounter;
    }else if(computerSelection === "Scissors" && playerSelection === "ROCK"){
        result.textContent = 'You Won!';
        bobTakeHit();
        playerCounter++;
        playerScore.textContent = playerCounter;
    }else if(computerSelection === "Paper" && playerSelection === "ROCK"){
        result.textContent = 'Bob Won!';
        bobCounter++;
        playerTakeHit();
        bobScore.textContent = bobCounter;
    }else{
        result.textContent = 'It is a draw!';
        bobIdle();
    }
    declareWinner();
}

function bobTakeHit(){
    bob.src = 'GameAssets/Death.png';
    bob.style.animation = "moveSpriteSheet 1s steps(7) infinite";
}

function playerTakeHit(){
    bob.src = 'GameAssets/Attack1.png';
    bob.style.animation = 'moveSpriteSheet 1s steps(8) infinite';
}

function bobIdle(){
    bob.src = 'GameAssets/Idle.png';
    bob.style.animation = 'moveSpriteSheet 1s steps(8) infinite';
}

function declareWinner(){
    if(playerCounter == 5){
        result.textContent = 'You have won and bob has parished';
        //winner.textContent = 'Congraulations you have Won!';
        window.location.href = "http://127.0.0.1:5500/gameOver.html";
    }else if(bobCounter == 5){
        result.textContent = 'Bob have won and you have parished';
        //winner.textContent = 'Looks like Bob got the best of you';
        window.location.href = "http://127.0.0.1:5500/gameOver.html";
    }
}

armor.addEventListener('click', () => {
    playerChoice = "ROCK";
    playRound(playerChoice, getComputerChoice());

});

bow.addEventListener('click', () => {
    playerChoice = "PAPER";
    playRound(playerChoice, getComputerChoice());
});

sword.addEventListener('click', () => {
    playerChoice = "SCISSORS";
    playRound(playerChoice, getComputerChoice());
});