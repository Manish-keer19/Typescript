let score: number | string = 23;

score = 12;
score = "12";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let manish: User | Admin = {
  name: "MS",
  id: 12,
};

manish = {
  username: "manish",
  id: 12,
};

function getDbid(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbid(2);
getDbid("2");

// Union on array
let data: number[] = [1, 2, 3, 4];
let data1: string[] = ["1", "2", "3"];

let data2: (number | string | boolean)[] = [1, 2, "2", 4, true];

let seatAllotment: "last" | "middle" | "window";

seatAllotment = "last";
//  seatAllotment = "crew"
