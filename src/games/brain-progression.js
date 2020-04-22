import gameEngine from '../index.js';
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

const playRound = () => {
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

  const question = forQuestion.join(' ');

  return {
    question,
    result,
  };
};

export default () => gameEngine('What number is missing in the progression?', playRound);
