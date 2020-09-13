'use strict';

const insertShiftArray = require('../challenges/arrayshift/array-shift');

describe('noteee', () => {

    it('if the test pass', () => {
        expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);

    });

    it('if the test pass', () => {
        expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);

    });
});