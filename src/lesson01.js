// string, number, boolean, null, undefined, symbol, BigInt

// const str = 'str'

// object, array, function, set, map

// const car1 = {
//   brand: "bmw",
// };

// const car2 = car1;

// car2.brand = "kia";

// console.log(car1);

// const obj1 = {}

// const obj = new Object();
// const arr = new Array();
// const map = new Map();
// const set = new Set();
// const num = new Number(10);

// // console.log(num);

// const num2 = 20;

// const obj2 = {};

// let str1 = "str";
// const str2 = "str";

// console.log(str1 === str2);

// str1 = typeof str1.toUpperCase();

// // console.log(str1.toUpperCase());

// console.log(str1 === str2);
// console.log(str1);

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = [...arr1];

// arr1.pop();

// console.log(arr2);
// console.log(...arr2);

// const car1 = {
//   brand: "bmw",
//   color: "black",
// };

// // const car2 = {
// //   brand: car1.brand,
// //   color: car1.color,
// // };

// const car2 = { ...car1 };

// car1.brand = "toyota";

// console.log(car1);
// console.log(car2);
// console.log(car2 === car1);

// const superUser = {
//   id: 10,
//   name: "Clementina DuBuque",
//   username: "Moriah.Stanton",
//   email: "Rey.Padberg@karina.biz",
//   address: {
//     street: "Kattie Turnpike",
//     suite: "Suite 198",
//     city: "London",
//     zipcode: "31428-2261",
//     geo: [
//       {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//       {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     ],
//   },
//   phone: "024-648-3804",
//   website: "ambrose.net",
//   company: {
//     name: "Hoeger LLC",
//     catchPhrase: "Centralized empowering task-force",
//     bs: "target end-to-end models",
//   },
// };

// // const superUserCopy = { ...superUser };
// const superUserCopy = structuredClone(superUser);

// // const superUserCopy = {
// //   ...superUser,
// //   address: {
// //     ...superUser.address,
// //     geo: [...superUser.address.geo],
// //   },
// // };

// superUserCopy.address.city = "Paris";
// superUserCopy.address.geo.pop();
// superUserCopy.name = "Louise";
// superUserCopy.address.geo[0].lat = 100;

// console.log("superUserCopy", superUserCopy);
// console.log("superUser", superUser.address.geo);

// function calcValues(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// // const sum = calcValues(4, 2)[0];
// // const dif = calcValues(4, 2)[1];
// // const mult = calcValues(4, 2)[2];
// // const div = calcValues(4, 2)[3];

// const [sum, , mult, div] = calcValues(4, 2);

// // console.log("sum", sum);
// // // console.log("dif", dif);
// // console.log("mult", mult);
// // console.log("div", div);

// import {setState} from 'react'

// const [apple, setApple] = setState(1)

const id = "234kjg3458";

const superUser = {
  id: 10,
  name: "Clementina DuBuque",
  username: "Moriah.Stanton",
  email: "Rey.Padberg@karina.biz",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models",
  },
};

// const id = superUser.id
// const name = superUser.name

const {
  email: superUser1Email,
  id: superUserId1,
  username: superUser1Username,
} = superUser;
const {
  email: superUser2Email,
  id: superUserId2,
  username: superUser2Username,
} = superUser;

console.log("id and name", superUser1Email, superUser1Username);
