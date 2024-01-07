// logger.js
const log = (message) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${message}`);
    // let fullTrace = console.trace('Pełny trace:');
  }
};

export default log;
