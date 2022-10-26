/* PROBLEM: Arrays aren't shown in 1 line in inspector, can't test console.logs. */

/* 01. Words */
const fruits = ['palta', 'naranjas', 'manzanas', 'anana', 'bananas'];

console.log(fruits);
console.log(fruits.sort());

/* 02. Numbers */
const numbers = [78, 10, 7, 1, 2];

console.log(numbers); /* 78, 10, 7, 1, 2 */
console.log(numbers.sort()); /* 1, 10, 2, 7, 78 */

const num = numbers.sort(function(a, z){
    return a-z;
})

console.log(num); /* 1, 2, 7, 10, 78 */

const num2 = numbers.sort(function(a, b){
    return b-a;
})

console.log(num2); /* 78, 10, 7, 2, 1 */

/* 03. Words reverse */
/* 03.01. */
const words = ['flavia', 'pablo', 'abeja', 'perro', 'animal']

console.log(words.sort());
console.log(words.sort().reverse());

/* 03.02. */
const words2 = words.sort(function(b, a){ /* Can change and put a, b to order them alphabetically. */
    if(b>a) return -1;
    return 0;
})

console.log(words2);
