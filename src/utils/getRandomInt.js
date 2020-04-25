export default (min, max) => {
  const maximum = Math.floor(max);
  const minimum = Math.ceil(min);

  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};
