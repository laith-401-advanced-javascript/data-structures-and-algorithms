'use strict';

const sortingArray = require('../challenges/sorting/sort');

describe('noteee', () => {

  it('sorting ', () => {
    let array = [8,4,23,42,16,15];

    expect(sortingArray(array)).toEqual([4,8,15,16,23,42]);

  });

});