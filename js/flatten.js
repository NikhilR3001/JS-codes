function flatten(arr) {
  let result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  });
    return result;
}

//using reduce

function flattenTwo(arr) {
    return arr.reduce((acc, val) => 
        acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}


console.log(flatten([1,[2,3,[4,5]],6]));
console.log(flattenTwo([[["a"]], [["b"]], ["c", ["d"]]])); 

