// Q. Create a function using "function" keyword that takes a string as an argument & 
//returns the number of vowels in string..?

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u") {
//             count++;
//         }
//     }

//     console.log(count);
// }

// Create an arrow function to perform the same task.

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    return count;
}


