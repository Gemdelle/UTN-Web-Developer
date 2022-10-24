function sum(a, b) {
    return a + b;
}

const num1 = 15;
const num2 = 30;
const num3 = 20;
const num4 = 50;

const result1 = sum(num1, num2);
const result2 = sum(num3, num4);

console.log(result1);
console.log(result2);
console.log(sum(120,200));

alert(`El primer resultado es ${result1}`);
alert(`El segundo resultado es ${result2}`);
alert(`El tercer resultado es ${sum(120,200)}`);