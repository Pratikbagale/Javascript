// for-in_Loop
// It is only use for objects
// Syntax : for( let key in objVar){
// do some work
// }

let student = {
    name: "Pratik Bagale",
    age: 22,
    cgpa: 7.5,
    isPass: true,
};
for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}