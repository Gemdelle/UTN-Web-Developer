/* Find the first higher number. First coincidence. */

const numbers = [10, 9, 22, 53, 24, 5, 3];

const found = numbers.find(num => num > 12);

console.log(found); /* 22 */