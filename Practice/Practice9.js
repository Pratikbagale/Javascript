// Array

// For a given array with prices of 5 items ->[250,645,300,900,50]
// All items have an offer of 10% OFF on them.change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i}=${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);


// output :

// Array(5) [ 225, 580.5, 270, 810, 45 ]
// ​
// 0: 225
// ​
// 1: 580.5
// ​
// 2: 270
// ​
// 3: 810
// ​
// 4: 45
// ​
// length: 5