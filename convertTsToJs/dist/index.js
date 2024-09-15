"use strict";
console.log("typescript is here and still use");
console.log("i love you");
// class User {
//    public name:string
//    public email:string
//    readonly city:string = "Indore"
//     constructor(name:string,email:string){
//         this.name = name
//         this.email=email
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        //   private CourseCount:number = 1
        this.CourseCount = 1;
    }
    get getUsername() {
        return this.name;
    }
    set setUsername(username) {
        this.name = username;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.IsFamily = true;
    }
    changeCourseCount() {
        this.CourseCount = 4;
    }
}
const manish = new User("manish", "manishkeer530@gmail.com");
console.log(manish);
// manish.city= "Khategoan"
