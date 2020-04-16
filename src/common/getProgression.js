import getRandomInt from './getRandomInt.js';

export default () => {
  const result = [];

  for (let i = 0, start = getRandomInt(15); i < 10; i += 1, start += 2) {
    result.push(start);
  }

  return result;
};
