// You are creating a website for your college.Create a class User with 2 properties,name 
// and email.it also has a method called viewData() that allow user to  view website data.


let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data = ", DATA);
    }
}

let student1 = new User("pratik", "pratik123@gmail.com");
let student2 = new User("sanket", "sanket123@gmial.com");

let teacher1 = new User("Dean", "dean123@gmail.com");