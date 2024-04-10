// // reverse string

// function reverseString(str) {
//     return str.split('').reverse().join('');

// }

// // test case 

// console.log(reverseString("hello"));


// Find Maximum number

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;


}

// test case 

console.log(findMax([3, 7, 2, 9, 1, 10]));

