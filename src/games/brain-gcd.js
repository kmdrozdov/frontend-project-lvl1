import gameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const MAX = 100;
const MIN = 10;

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let dividend = Math.max(num1, num2);
  let divisor = Math.min(num1, num2);
  let modulo = divisor;

  while (modulo !== 0) {
    divisor = modulo;
    modulo = dividend % divisor;
    dividend = divisor;
  }

  return divisor;
};

const getRoundData = () => {
  const num1 = getRandomInt(MIN, MAX);
  const num2 = getRandomInt(MIN, MAX);

  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));

  return {
    question,
    answer,
  };
};

export default () => gameEngine(gameRules, getRoundData);
