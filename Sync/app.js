// Synchronous programming

// console.log("one");
// console.log("two");
// console.log("three");

// Asynchronous programming

console.log("one");
console.log("two");
function hello() {
    console.log("hello");
}

setTimeout(hello, 4000);
console.log("three");
console.log("four");