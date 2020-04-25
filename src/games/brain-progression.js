import gameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const PROGRESSION_LENGTH = 10;
const MAX = 15;
const MIN = 10;
const STEP = 2;

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const result = [];

  for (let i = 0, start = getRandomInt(MIN, MAX); i < PROGRESSION_LENGTH; i += 1, start += STEP) {
    result.push(start);
  }

  return result;
};

const getRoundData = () => {
  const progression = getProgression();
  const chosenIndex = getRandomInt(0, progression.length);
  const answer = String(progression[chosenIndex]);

  progression[chosenIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    answer,
  };
};

export default () => gameEngine(gameRules, getRoundData);
