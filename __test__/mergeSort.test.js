'use strict';

const Mergesort = require('../challenges/mergeSort/mergeSort');

describe('Mergesort', () => {

  it('Mergesort ', () => {
    let array = [8,4,15,16,23,42];

    expect(Mergesort(array)).toEqual([4,8,15,16,23,42]);

  });

});