// Class is a program-code template for creating objects.
// Those objects  will have some state(variable) & some behaviour(functions) inside it.

// Syntax -
// class MyClass {
//     constructor() {
//         ...
//     }
//     myMethod() {
//         ...
//     }
// }
// let myObj = new MyClass();

// In class we don't need to separate function using ,(coma)

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar("fortuner", 10);// constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexux", 12);// constructor
console.log(lexus);