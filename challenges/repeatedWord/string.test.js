'use strict';

const lengthyString = require('./repeated-word');

describe('test string ', () => {

  it('check if the string will return true the repeated word  ', () => {

    expect(lengthyString('Hi and Hi')).toBe('Hi');

  });

  it('check if the string will return false  ', () => {

    expect(lengthyString('this is not repeated word')).toBeFalsy();

  });


});