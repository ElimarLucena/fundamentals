
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*
for (let index of numbers) {
    console.log(index);
}
*/

/*
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];
}
conso
*/

/*
let sum = 0;
let arithmeticAverage = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];
    arithmeticAverage = sum / (index + 1);
}

let value = arithmeticAverage;
if (value > 20) {
    console.log("value greater than 20");
} else {
    console.log("value less than 20");
}
*/

/*
https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array

var bigValue = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigValue) {
        bigValue = numbers[index];
    }
}
console.log(bigValue);
*/

/*
let oddValue = 0;
for (let index = 0; index < numbers.length; index += 1){
    if ((numbers[index] % 2) === 1) {
        oddValue += 1;
    } 
} 

if (oddValue != 0) {
    console.log(`${oddValue} odd found.`);
} else {
    console.log("no odd values found.");
}
*/

/*
let smallValue = Math.min(...numbers)
console.log(smallValue);
*/

/*
let counter = [];

for (let index = 1; index < 26; index += 1) {
    counter.push(index);
}
console.log(counter); 

let counterTwo = [];
for (let index = 0; index < counter.length; index += 1) {
    counterTwo = (counter[index] / 2);
    console.log(counterTwo);
}
*/