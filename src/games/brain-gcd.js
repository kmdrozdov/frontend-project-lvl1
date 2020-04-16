import readlineSync from 'readline-sync';
import core from './core.js';
import getRandomInt from '../getRandomInt.js';
import getGcd from '../getGcd.js';

const playRound = (userName) => {
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = getGcd(randomNumber1, randomNumber2);

  if (userAnswer !== String(result)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
    console.log(`Let's try again, ${userName}!`);

    return false;
  }

  return true;
};

export default (userName) => core('Find the greatest common divisor of given numbers.', playRound, userName);
