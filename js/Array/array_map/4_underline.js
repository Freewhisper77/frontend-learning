const a = [...Array(5)].map((_,x) => x++);
console.log(Array(5)); // [ <5 empty items> ]
console.log(...Array(5)); // undefined undefined undefined undefined undefined
console.log([...Array(5)]); // [ undefined, undefined, undefined, undefined, undefined ]
console.log(a); // [ 0, 1, 2, 3, 4 ]

const arr = [2, 4, 6, 8, 10];
console.log(arr); // [ 2, 4, 6, 8, 10 ]
console.log(...arr); // 2 4 6 8 10
console.log([...arr]); // [ 2, 4, 6, 8, 10 ]

const array = [2, 4, 6, 8, 10];
console.log(array.map((_, index) => index*10));
// output: [ 0, 10, 20, 30, 40 ]

const fuc = function (length) {
  return [...new Array(length)].map((_, index) => ({
    time: 1666565656565 - index * 1000 * 60 * 60, // ?不明白为什么要这样拿到time
    value: Math.random() * 0.7 + 0.4, // [0.4,1.1) -> 20↔
  }));
}
console.log(fuc(4));
