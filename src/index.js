import readlineSync from 'readline-sync';

const SUCCESS_ATTEMPTS = 3;
let counter = 0;

export default (gameDefinition, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(gameDefinition);

  while (counter < SUCCESS_ATTEMPTS) {
    const { question, result } = gameRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(result)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
    counter += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
