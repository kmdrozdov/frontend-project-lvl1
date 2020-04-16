import readlineSync from 'readline-sync';
import core from './core.js';
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

const playRound = (userName) => {
  const randomNumber1 = getRandomInt(MAX_NUMBER);
  const randomNumber2 = getRandomInt(MAX_NUMBER);
  const randomOperation = MATH_OPERATIONS[getRandomInt(MATH_OPERATIONS.length)];

  console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = getResult(randomNumber1, randomNumber2, randomOperation);

  if (userAnswer !== String(result)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
    console.log(`Let's try again, ${userName}!`);

    return false;
  }

  return true;
};

export default (userName) => core('What is the result of the expression?', playRound, userName);
