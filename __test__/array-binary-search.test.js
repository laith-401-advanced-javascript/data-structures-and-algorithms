'use strict';

const BinarySearch = require('../challenges/arrayBinarySearch/array-binary-search');


describe('noteee', () => {

  it('if the test pass', () => {
    expect(BinarySearch([1, 2, 3, 5, 8], 2)).toEqual(1);
    expect(BinarySearch([1, 2, 3, 5, 8], 7)).toEqual(-1);


  });

});