import gameEngine from '../index.js';
import getRandomInt from '../common/getRandomInt.js';

const MAX_NUMBER = 100;

const playRound = () => {
  const question = getRandomInt(MAX_NUMBER);
  const result = question % 2 === 0 ? 'yes' : 'no';

  return {
    question,
    result,
  };
};

export default () => gameEngine('Answer "yes" if the number is even, otherwise answer "no".', playRound);
