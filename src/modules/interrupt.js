const interrupt = msg => x => {
  console.log(msg ? msg : 'The current value is ', x);
  return x;
};

export default interrupt;
