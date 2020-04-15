const SUCCESS_ATTEMPTS = 3;
let counter = 0;

export default (generalQuestion, playRoundFunc, userName) => {
  console.log(generalQuestion);

  while (counter < SUCCESS_ATTEMPTS) {
    if (playRoundFunc(userName) === false) {
      return;
    }

    console.log('Correct!');
    counter += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
