'use strict';

const btnGuess = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guessInput = document.querySelector('.guess');

let secretNumber, score, highScore;

const init = function () {
  secretNumber = Math.floor(Math.random() * 20);
  score = 20;
  highScore = 0;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
};

init();

const updateMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

btnGuess.addEventListener('click', function () {
  const guess = +guessInput.value;

  if (!guess) {
    updateMessage('🟥 Invalid Input!');
  } else if (guess === secretNumber) {
    updateMessage('🎉 You win!!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    updateMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
    if (score > 1) {
      score--;
    } else {
      score = 0;
      document.querySelector('.check').disabled = true;
      updateMessage('😑 You lost!!!');
    }
    updateScore(score);
  }
});

btnAgain.addEventListener('click', init);
