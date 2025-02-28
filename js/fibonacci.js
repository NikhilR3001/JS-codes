function fibonacci(n){
    if(n < 0) return [];
    if(n===1) return [0];

    let numbers = [0,1]
    for(let i = 2; i < n; i++){
         numbers.push(numbers[i-1] + numbers[i-2]);
    }
    return numbers;
}

console.log(fibonacci(5));