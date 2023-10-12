'use strict';

function MyArray() {
  this.length = 0;
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  }
}

MyArray.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const myArr = new MyArray();

myArr.push(1);
myArr.push(2);
myArr.push(3);

const isEven = function (item) {
  return item % 2 === 0;
};

const result = myArr.every(isEven);
console.log(result);
