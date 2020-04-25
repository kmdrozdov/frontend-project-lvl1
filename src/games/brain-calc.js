import gameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const MATH_OPERATIONS = ['+', '-', '*'];
const MAX = 15;
const MIN = 5;

const gameRules = 'What is the result of the expression?';

const getCalculation = (num1, num2, operator) => {
  let res;

  switch (operator) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    default:
      res = num1 * num2;
  }

  return res;
};

const getRoundData = () => {
  const num1 = getRandomInt(MIN, MAX);
  const num2 = getRandomInt(MIN, MAX);

  const chosenIndex = getRandomInt(0, MATH_OPERATIONS.length);
  const operation = MATH_OPERATIONS[chosenIndex];

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(getCalculation(num1, num2, operation));

  return {
    question,
    answer,
  };
};

export default () => gameEngine(gameRules, getRoundData);
