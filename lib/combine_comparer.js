export default (first, second) => (...args) => {
  const first_result = first(...args);

  return first_result === 0 ? second(...args) : first_result;
};
