// // forEach loop in Arrays

// it is for integers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// for Strings

let arr = ["pune", "mumbai", "delhi"];

arr.forEach((cities, idx, arr) => {
    console.log(cities.toUpperCase(), idx, arr); // all cities print in Capital "PUNE","MUMBAI","DELHI"
});


// OUTPUT =>

// PUNE 0 
// Array(3) [ "pune", "mumbai", "delhi" ] 0 IS idx and arr print full array

// MUMBAI 1 
// Array(3) [ "pune", "mumbai", "delhi" ] 1 is idx

// DELHI 2 
// Array(3) [ "pune", "mumbai", "delhi" ] 2 is idx




