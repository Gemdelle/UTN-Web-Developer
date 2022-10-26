const numbers = [1, 5, 10, 15];

const doubles = numbers.map(function(num){
    return num*2;
})

console.log(numbers); /* 1, 5, 10, 15 */
console.log(doubles); /* 2, 10, 20, 30. */
