
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function and has a lenght of 1', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('capitalize the first letter of each word', () => {
    assert.strictEqual(capitalizeFirstLetters('first test'), 'First Test');
  });

  it('capitalize one letter and handle an empty space', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});

