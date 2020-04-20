import readlineSync from 'readline-sync';
import core from './core.js';
import getRandomInt from '../common/getRandomInt.js';

const MAX_NUMBER = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const playRound = (userName) => {
  const randomNumber = getRandomInt(MAX_NUMBER);
  const isPrimeNum = isPrime(randomNumber) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (isPrimeNum !== userAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isPrimeNum}".`);
    console.log(`Let's try again, ${userName}!`);

    return false;
  }

  return true;
};

export default (userName) => core('Answer "yes" if given number is prime. Otherwise answer "no".', playRound, userName);
