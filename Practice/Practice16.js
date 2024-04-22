// Q.Take a number n as input from user.Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all nubers in the array.

let n = prompt("enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;

}
console.log(arr);

// sum of all numbers in the array
let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum = ", sum);

// product of all number in the array

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial : ", factorial);
