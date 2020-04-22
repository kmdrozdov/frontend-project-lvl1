import gameEngine from '../index.js';
import getRandomInt from '../common/getRandomInt.js';

const MATH_OPERATIONS = ['+', '-', '*'];
const MAX_NUMBER = 25;

const getResult = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }

  if (operator === '-') {
    return num1 - num2;
  }

  return num1 * num2;
};

const playRound = () => {
  const randomNumber1 = getRandomInt(MAX_NUMBER);
  const randomNumber2 = getRandomInt(MAX_NUMBER);
  const randomOperation = MATH_OPERATIONS[getRandomInt(MATH_OPERATIONS.length)];

  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const result = getResult(randomNumber1, randomNumber2, randomOperation);

  return {
    question,
    result,
  };
};

export default () => gameEngine('What is the result of the expression?', playRound);
