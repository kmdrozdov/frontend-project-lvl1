export default (a, b) => {
  let res = a;
  let counter = b;
  let raw;

  if (a < b) {
    raw = res;
    res = counter;
    counter = raw;
  }

  while (counter !== 0) {
    raw = counter;
    counter = res % counter;
    res = raw;
  }

  return res;
};
