import gameEngine from '../index.js';
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

const playRound = () => {
  const question = getRandomInt(MAX_NUMBER);
  const result = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    result,
  };
};

export default () => gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', playRound);
