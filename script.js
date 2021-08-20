'use strict';
// Global Variables
let score = 20;

// Generating the secret number to compare with userInput
let secretNumber = Math.floor(Math.random()*20 +1);

// For userInput and comparison with the guess number with score updation and game logic
document.querySelector('.check').addEventListener('click',function(){
    let userInput =  Number(document.querySelector('.guess').value);
    // When the user wins
    if(userInput === secretNumber){
        document.querySelector('.message').textContent = "Hurray! ✌👏 You've guessed the correct number!.";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '50rem';
        document.querySelector('.number').textContent = secretNumber;
        console.log("Correct Guess !!!");
        // Zero(0) as input by user
    }else if(userInput === 0){
        document.querySelector('.message').textContent = "⚠ Input should be between 1 to 20.";
        // No input by user but clicks on check button
    }else if(!userInput){
        console.log("Falsy click on the 'check button'.");
        // User Input is more than guess number
    }else if(userInput>secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "📈 Too high guess. Try Again!";
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "😬 You loose the game. Try Again!";
            document.querySelector('.score').textContent = "0";
            document.querySelector('body').style.backgroundColor = "#D03311";
        }
        // User Input is less than guess number
    }else if(userInput<secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =  "⬇ Too low guess. Try Again!";
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "😬 You loose the game. Try Again!";
            document.querySelector('.score').textContent = "0";
            document.querySelector('body').style.backgroundColor = "#D03311";
        }
    }
})

// Implementing the playing again choice by the user
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.floor(Math.random()*20 +1);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '25rem';
})
