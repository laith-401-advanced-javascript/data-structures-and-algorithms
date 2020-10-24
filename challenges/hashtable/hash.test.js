const  HashTable = require('./hashtable');


describe('linked list module', () => {

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let myHash = new HashTable(1024);
    myHash.add('Laith', 123);
    expect(myHash.contains('Laith')).toBeTruthy();

  });

   

  it(' Retrieving based on a key returns the value stored', () => {
    let myHash = new HashTable(1024);
    myHash.add('Laith', 123);
    expect(myHash.get('Laith').head.value['Laith']).toEqual(123);

  });


  it(' Successfully returns null for a key that does not exist in the hashtable', () => {
    let myHash = new HashTable(1024);
    myHash.add('Laith', 123);
    expect(myHash.get('dataNotexist')).toEqual(null);

  });


  it(' Successfully handle a collision within the hashtable', () => {
    let myHash = new HashTable(1024);
    myHash.add('Laith', 123);
    myHash.add('Laith', 456);

    expect(myHash.contains('Laith')).toBeTruthy();

  });



  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let myHash = new HashTable(1024);
    myHash.add('Laith', 123);
    myHash.add('Liath', 456);

    expect(myHash.get('Liath').head.next.value['Liath']).toEqual(456);

  });


  it('Successfully hash a key to an in-range value', () => {
    let myHash = new HashTable(1024);
    expect(myHash.hash('Laith')).toEqual(318);

  });


});

