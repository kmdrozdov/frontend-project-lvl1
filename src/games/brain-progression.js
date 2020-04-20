import readlineSync from 'readline-sync';
import core from './core.js';
import getRandomInt from '../common/getRandomInt.js';

const PROGR_LENGTH = 10;
const PROGR_STEP = 2;
const MAX_NUMBER = 15;

const getProgression = () => {
  const result = [];

  for (let i = 0, start = getRandomInt(MAX_NUMBER); i < PROGR_LENGTH; i += 1, start += PROGR_STEP) {
    result.push(start);
  }

  return result;
};

const playRound = (userName) => {
  const progression = getProgression();
  const randomIndex = getRandomInt(progression.length);
  let result = '';

  const forQuestion = getProgression().map((item, index) => {
    if (index === randomIndex) {
      result = item;
      return '..';
    }

    return item;
  });

  console.log(`Question: ${forQuestion.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== String(result)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
    console.log(`Let's try again, ${userName}!`);

    return false;
  }

  return true;
};

export default (userName) => core('What number is missing in the progression?', playRound, userName);
