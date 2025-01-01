const common = [
    '--require-module ts-node/register', // Enable TypeScript support
    '--require features/Steps_definitions/*.steps.ts', // Load step definitions
    '--format progress', // Format output

  ].join(' ');
  
  module.exports = {
    default: common,
  };
  