function getEvenNumbers(arr){
   return arr.filter((num)=>num % 2 === 0);
}

function getEvenNumbersLoop(arr){
   let evenNumbers = [];
   for(let num of arr){
    if(num % 2 === 0){
        evenNumbers.push(num)
    }
   }
   return evenNumbers;
}


const numbers = [1,2,3,4,5,6,7,8,9,0];
console.log(getEvenNumbers(numbers));
console.log(getEvenNumbersLoop(numbers));