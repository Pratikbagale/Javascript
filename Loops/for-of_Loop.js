// for-of_Loop

// Syntax : for(let val of strVar){
// do some work
//  }

// it is use in string & arrays

let str = "HELLO WORLD";
let size = 0;
for (let i of str) {
    console.log("i = ", i);
    size++;
}

console.log("string size=  ", size);