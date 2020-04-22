import gameEngine from '../index.js';
import getRandomInt from '../common/getRandomInt.js';

const MAX_NUMBER = 100;

const getGcd = (a, b) => {
  let res = a;
  let counter = b;
  let raw;

  if (a < b) {
    raw = res;
    res = counter;
    counter = raw;
  }

  while (counter !== 0) {
    raw = counter;
    counter = res % counter;
    res = raw;
  }

  return res;
};

const playRound = () => {
  const randomNumber1 = getRandomInt(MAX_NUMBER);
  const randomNumber2 = getRandomInt(MAX_NUMBER);

  const question = `${randomNumber1} ${randomNumber2}`;
  const result = getGcd(randomNumber1, randomNumber2);

  return {
    question,
    result,
  };
};

export default () => gameEngine('Find the greatest common divisor of given numbers.', playRound);
