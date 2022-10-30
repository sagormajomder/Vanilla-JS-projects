'use strict';
let score = Number(document.querySelector('.score').textContent);
let scoreMessage = document.querySelector('.score');
let actualNumber = document.querySelector('.number');
const actualNumberMessage = document.querySelector('.number').textContent;
let checkButton = document.querySelector('.check');
let message = document.querySelector('.message');
let highScoreMessage = document.querySelector('.highscore');
let highScore = Number(document.querySelector('.highscore').textContent);

const againButton = document.querySelector('.again');

function randomGeneraton() {
  return Math.floor(Math.random() * 20 + 1);
}
function scoreChange() {
  score--;
  scoreMessage.textContent = score;
  if (!score) {
    message.textContent = 'Sry! You Lost Game';
    checkButton.setAttribute('disabled', '');
  }
}

function messagePrint(value) {
  message.textContent = value;
}

let answer = randomGeneraton();

// click event
checkButton.addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
 if (guessValue<=0 || guessValue > 20) {
    messagePrint('Enter Input between 1 to 20');
  } else if (guessValue != answer) {
    guessValue > answer
      ? messagePrint('📈 Too High!')
      : messagePrint('📉 too low');
    if (score) scoreChange();
  } else if (guessValue === answer) {
    messagePrint('🎉 Win the game');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highScore < score) {
      highScore = score;
      highScoreMessage.textContent = highScore;
    }
    actualNumber.textContent = answer;
    actualNumber.style.width = '30rem';
  }
});

// Again button
againButton.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  actualNumber.textContent = actualNumberMessage;
  actualNumber.style.width = '15rem';
  answer = randomGeneraton();
  document.querySelector('.guess').value = '';
  messagePrint('Start Guessing...');
  score = 20;
  scoreMessage.textContent = score;
  checkButton.removeAttribute('disabled');
});
