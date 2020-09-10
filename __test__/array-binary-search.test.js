'use strict';

const binary = require('../challenges/arrayBinarySearch/array-binary-search');


describe('noteee', () => {

  it('if the test pass', () => {
    expect(binary([1, 2, 3, 5, 8], 2)).toEqual(2);
    expect(binary([1, 2, 3, 5, 8], 7)).toEqual(-1);


  });

});