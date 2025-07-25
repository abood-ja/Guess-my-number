'use strict';

let secNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let state = '';
const again = function () {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#333';
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
};
againBtn.addEventListener('click', again);
checkBtn.addEventListener('click', function () {
  if (state !== 'win') {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      //when there is no innput
      message.textContent = '⛔  No Number!';
    }
    // when player wins
    else if (guess === secNumber) {
      document.querySelector('.number').textContent = secNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      message.textContent = '🎉 Correct Number!';
      state = 'win';
    }
    // when player lose
    else if (guess !== secNumber) {
      if (score !== 0) {
        score--;
        document.querySelector('.score').textContent = score;
        if (guess > secNumber) {
          if (guess - secNumber >= 5) {
            message.textContent = '📈Too high ';
          } else if (guess - secNumber < 5) {
            message.textContent = 'High';
          }
        } else if (guess < secNumber) {
          if (secNumber - guess >= 5) {
            message.textContent = '📉Too low';
          } else if (secNumber - guess < 5) {
            message.textContent = 'Low';
          }
        }
      } else again();
    }
  } else {
    again();
  }
});
