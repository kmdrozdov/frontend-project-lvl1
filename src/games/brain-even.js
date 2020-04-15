import readlineSync from 'readline-sync';
import core from './core.js';
import getRandomInt from '../getRandomInt.js';

const playRound = (userName) => {
  const randomNumber = getRandomInt(100);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (isEven !== userAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven}".`);
    console.log(`Let's try again, ${userName}!`);

    return false;
  }

  return true;
};

export default (userName) => core('Answer "yes" if the number is even, otherwise answer "no".', playRound, userName);
