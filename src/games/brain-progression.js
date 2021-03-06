import runGameEngine from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const PROGRESSION_LENGTH = 10;
const MAX = 15;
const MIN = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstMember, step, length) => {
  const progression = [];

  for (let i = 0, member = firstMember; i < length; i += 1, member += step) {
    progression.push(member);
  }

  return progression;
};

const getRoundData = () => {
  const firstMember = getRandomInt(MIN, MAX);
  const step = getRandomInt(1, 5);
  const progression = generateProgression(firstMember, step, PROGRESSION_LENGTH);
  const hiddenMemberIndex = getRandomInt(0, progression.length - 1);
  const answer = String(progression[hiddenMemberIndex]);

  progression[hiddenMemberIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    answer,
  };
};

export default () => runGameEngine(gameDescription, getRoundData);
