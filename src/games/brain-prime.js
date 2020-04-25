import gameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const MAX = 100;
const MIN = 1;

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const question = getRandomInt(MIN, MAX);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => gameEngine(gameRules, getRoundData);
