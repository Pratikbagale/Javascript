// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class child extends Parent { }
// let obj = new child();

class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(branch) {

        console.log("enter child constructor");

        super();// SuperKeyword to invoke parent class constructor.
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("solve problems,build something");
    }
}
let engObj = new Engineer("chemical engg");