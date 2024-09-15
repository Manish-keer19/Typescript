console.log("typescript is here and still use");
console.log("i love you")

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
   
//   private CourseCount:number = 1
  protected CourseCount:number = 1
    constructor(public name:string,public email:string){
       
    }


    get getUsername():string{
        return this.name
    }
    set setUsername(username:string){
        this.name = username
    }
}

class subUser extends User{
   public IsFamily:boolean = true


   changeCourseCount (){
    this.CourseCount = 4
   }


}
const manish = new User("manish","manishkeer530@gmail.com")
console.log(manish);
// manish.city= "Khategoan"
