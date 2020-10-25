'use strict';

function leftJoin(hash1, hash2) {

  let arr = [];

  Object.keys(hash1).forEach(key => {
    let arr2 = [];
    arr2.push(key, hash1[key]);
    if (hash2[key]) {
      arr2.push(hash2[key]);
    }
    else {
      arr2.push(null);
    }

    arr.push(arr2);
  });
  return arr;
}
 

const obj1 = {
  'name': 'laith',
  'age': '24',
};

const obj2 = {
  'name': 'ahmad',
  'age2': '24',
};


console.log('*******', leftJoin(obj1,obj2));