
// A javascript object is an entity having state and behavior 
// JS objects have a special property called prototype.

// Prototype - is a referance to an Object here employee is an oject..


const employee = {
    calcTax() {
        console.log("tax rate is 10%");// output - employee.calTax() - tax rate is 10%
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

// We can set prototype using __proto__
karanArjun.__proto__ = employee;
