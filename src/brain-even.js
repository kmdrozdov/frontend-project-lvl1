import readlineSync from 'readline-sync';

const SUCCESS_ATTEMPTS = 3;
let counter = 0;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  console.info('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (counter < SUCCESS_ATTEMPTS) {
    const randomNumber = getRandomInt(100);
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
    counter += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
