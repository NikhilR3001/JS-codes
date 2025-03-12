Array.prototype.myMap = function (cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

//example

const arr = [1,2,3,4];

const multiply = arr.myMap(num => num * 2);

console.log(multiply);
