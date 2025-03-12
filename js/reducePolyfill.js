Array.prototype.myReduce = function (cb, initialValue) {
  let accumulater = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulater = accumulater ? cb(accumulater,this[i], i, this) : this[i];
  }
  return accumulater;
};

//example

const arr = [1, 2, 3, 4];

const sum = arr.myReduce((num, curr) =>  num + curr , 0);

console.log(sum);
