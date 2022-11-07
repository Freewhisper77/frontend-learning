// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const today = new Date();
console.log(today.getDay()); // output: 1
// Q1.但我们想要的是1所对应的英文Monday 思考，该怎么办呢？

console.log(`${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`); // output: 9 : 3 : 53
// Q2.但我们想要的是hour(9）后面显示PM/AM 思考，该怎么办呢？
