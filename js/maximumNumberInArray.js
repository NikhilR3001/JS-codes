function maximumNumberInArray1(arr) {
  return Math.max(...arr);
}

function maximumNumberInArray2(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

function maximumNumberInArray3(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const number = [20, 30, 40, 50, 60, -100];

console.log(maximumNumberInArray1(number));
console.log(maximumNumberInArray2(number));
console.log(maximumNumberInArray3(number));
