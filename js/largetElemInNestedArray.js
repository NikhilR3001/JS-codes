function findLargestRecursive(arr){
    max = -Infinity;

    for(let num of arr){
        if(Array.isArray(num)){
            max = Math.max(max,findLargestRecursive(num))
        }else{
            max = Math.max(max,num)
        }
    }
    return max;
}

function findLargestElement(nestedArray) { 
    let largest = nestedArray[0][0];  
  
    for (let arr of nestedArray) { 
      for (let num of arr) {  
        if (num > largest) {  
          largest = num; 
        } 
      } 
    } 
  
    return largest;
  } 
  

  console.log(findLargestRecursive([3, [12, 5, [8, 30]], [25, 7, 15, 2]]));
  console.log(findLargestElement([[3, 12, 5],[8, 30, 25],[7, 15, 2]]));