const User = {
  name: "manish",
  email: "manishkeer530@",
  isActive: true,
};

// function creatUser({name:string,isPaid:boolean}){}

// let newUser = {
//   name: "manish",
//   isPaid: true,
//   email: "manish@gmail.com",
// };
// creatUser(newUser)

// we can return the object this type
function creatCourse(): { name: string; price: number } {
  return {
    name: "reactjs",
    price: 399,
  };
}

// Type Aliases
// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function creatUser(user:User):User{
//     return{
//         name:"manish",email:"manish@gmail.com",isActive:true
//     }
// }

// creatUser({name:"manish",email:"manish@gmail.com",isActive:true})

//  READONLY AND ? IN TYPESCRIPT

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isLoggedIn?: false;
};

const newUser: User = {
  _id: "123",
  name: "manish keer",
  email: "manishkerr@gmail.co",
};

// newUser._id = "123"
newUser.email = "mansihkeer530@gmail.com";

console.log(newUser);

type cardNumber ={
   cardNumber:string
}

type cardDate={
    cardDate:string
}
type Cvv ={
  cvv:number
}

type cardDetail = cardNumber & cardDate &number
