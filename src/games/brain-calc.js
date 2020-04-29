import gameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const MATH_OPERATIONS = ['+', '-', '*'];
const MAX = 15;
const MIN = 5;

const gameDescription = 'What is the result of the expression?';

const getCalculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRoundData = () => {
  const num1 = getRandomInt(MIN, MAX);
  const num2 = getRandomInt(MIN, MAX);

  const operationIndex = getRandomInt(0, MATH_OPERATIONS.length - 1);
  const operation = MATH_OPERATIONS[operationIndex];

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(getCalculation(num1, num2, operation));

  return {
    question,
    answer,
  };
};

export default () => gameEngine(gameDescription, getRoundData);
