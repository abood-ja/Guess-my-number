'use strict';

let secNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;
document.querySelector('.number').textContent = secNumber;
const button = document.querySelector('.check');

const again = function () {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = secNumber;
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

button.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    message.textContent = '⛔  No Number!';
  } else if (guess === secNumber) {
    message.textContent = '🎉 Correct Number!';
  } else if (guess !== secNumber) {
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
});
