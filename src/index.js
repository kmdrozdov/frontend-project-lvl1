import readlineSync from 'readline-sync';

const SUCCESS_ATTEMPTS_COUNT = 3;

export default (gameRules, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < SUCCESS_ATTEMPTS_COUNT; i += 1) {
    const { question, answer } = getRoundData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
