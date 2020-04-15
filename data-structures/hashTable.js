// hash table
// const myHT = new HashTable()
// myHT.insert('a', 1);
// to make it instant time, we need array with index

class HashTable {
  constructor(size) {
    this._storage = [];
    this._tableSize = size;
  }

  insert(key, value) {
    const index = this._hash(key, this._tableSize);
    if (!this._storage[index]) {
      this._storage[index] = []; //[[]]
    }

    this._storage[index].push([key, value]); //[[['a', 1]]]
  }

  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    const arrayIndex = this._storage[index];

    if (arrayIndex) {
      for (let i = 0; i < arrayIndex.length; i += 1) {
        const keyValueArr = arrayIndex[i];

        if (keyValueArr[0] === key) {
          return keyValueArr[i];
        }
      }
    }
  }

  // n === tableSize
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

const myHT = new HashTable(25);
console.log(myHT);
