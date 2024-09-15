interface User {
  // define variable for variable
  readonly dbId: Number;
  name: string;
  email: string;
  userId: number;
  googleId?: string;

  //   how to define the funtion/method
  // there are two ways to define method in interfacke
  startTrail: () => string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubtoken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const manish: Admin = {
  dbId: 12,
  name: "manish",
  userId: 2211,
  email: "manish@gmail.com",
  role: "admin",
  //   startTrail() {
  //     return "hello";
  //   },
  startTrail: () => {
    return "hello";
  },
  githubtoken: "token123",

  getCoupon: (name: "manish10", value: 10) => {
    return 10;
  },
};
