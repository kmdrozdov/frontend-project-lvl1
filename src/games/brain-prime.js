import readlineSync from 'readline-sync';
import core from './core.js';
import getRandomInt from '../common/getRandomInt.js';
import isPrime from '../common/isPrime.js';

const playRound = (userName) => {
  const randomNumber = getRandomInt(100);
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
