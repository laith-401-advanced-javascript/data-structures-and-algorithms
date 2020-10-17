'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');


describe('Multi module', () => {


  it(' Can the user input a  open and close bracket and return true boolean', () => {


    expect(multiBracketValidation('(){}[]')).toBeTruthy();

  });

  it(' Can the user input a wrong open or close bracket and return false boolean', () => {


    expect(multiBracketValidation('(}')).toBeFalsy();

  });


});