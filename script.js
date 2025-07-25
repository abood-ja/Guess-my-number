'use strict';

//selecting elements from the html
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
//initial the random number
let secNumber = Math.trunc(Math.random() * 20) + 1;
//initial the score to be 20
let score = 20;
//initial the state to be null
let state = '';
//initial high score with 0
let highScore = 0;
// function for styling the different states
const styling = function (curState) {
  if (curState === 'win') {
    document.querySelector('.number').textContent = secNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    message.textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
  }
};
// function for handling the again state
const again = function () {
  state = '';
  secNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  styling(state);
};
//function for handling the check button
const check = function () {
  if (state === '') {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      //when there is no innput
      message.textContent = '⛔  No Number!';
    }
    // when player wins
    else if (guess === secNumber) {
      if (score > Number(document.querySelector('.highscore').textContent)) {
        document.querySelector('.highscore').textContent = score;
      }
      state = 'win';
      styling(state);
      message.textContent = '🎉 Correct Number!';
    }
    // when player lose
    else if (guess !== secNumber) {
      if (score !== 0) {
        score--;
        document.querySelector('.score').textContent = score;
        if (guess > secNumber) {
          message.textContent = `${
            guess - secNumber >= 5 ? '📈Too high' : 'High'
          }`;
        } else if (guess < secNumber) {
          message.textContent = `${
            secNumber - guess >= 5 ? '📉Too low' : 'Low'
          }`;
        }
      } else {
        again();
      }
    }
  } else {
    message.textContent = 'You lost!';
    state = 'lose';
    again();
  }
};
// using the two handlers functions
againBtn.addEventListener('click', again);
checkBtn.addEventListener('click', check);
