import gameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const MIN = 10;
const MAX = 50;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomInt(MIN, MAX);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => gameEngine(gameRules, getRoundData);
