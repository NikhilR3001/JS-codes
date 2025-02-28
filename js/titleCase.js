function titleCase(str){
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

console.log(titleCase('HEllo NIKHil'));