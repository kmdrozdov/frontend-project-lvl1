import readlineSync from 'readline-sync';
import core from './core.js';
import getRandomInt from '../common/getRandomInt.js';
import getProgression from '../common/getProgression.js';

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
