import getRandomInt from './getRandomInt.js';

const PROGR_LENGTH = 10;
const PROGR_STEP = 2;
const MAX_NUMBER = 15;

export default () => {
  const result = [];

  for (let i = 0, start = getRandomInt(MAX_NUMBER); i < PROGR_LENGTH; i += 1, start += PROGR_STEP) {
    result.push(start);
  }

  return result;
};
