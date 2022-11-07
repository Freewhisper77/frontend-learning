// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Task1. 得到星期几(en)
// 已有方法：新建一个Date对象 之后可以用getDay() 返回星期几（数字）
const today = new Date();
// Q1.但我们想要的是1所对应的英文Monday 思考，该怎么办呢？
// （1）首先肯定先要定义一个数组来储存7个星期的英文
const day = today.getDay();
// （2）思考数字0~6和这个数组的关联：0~6可以和数组的index对应
/*// 注意，"Sunday"对应的getDay()的返回值是0，不是7哦~
const lastDay = new Date('November 6, 2022 23:15:30'); // 这是一个周日
console.log(lastDay.getDay()); // 0*/

// 所以在这个数组中，我们要把"Sunday"放在daylist[0]的位置
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + "."); // Today is : Monday.

// Q2.但我们想要的是hour(9）后面显示PM 思考，该怎么办呢？
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
// （1）hour: 21 -> 9; 9 -> 9
// （2）AM or PM
let m = (hour >= 12)? "PM" : "AM";
hour = (hour >= 12)? hour - 12 : hour;
// （3）还有一个要思考的问题：中午12点时，hour=12-12=0; 午夜0点时，hour=0;
if (hour===0 && m==='PM') {
  if (minute===0 && second===0) {
    hour=12;
    m='Noon';
  }else {
    hour=12;
    m='PM';
  }
}

if (hour===0 && m==='AM') {
  if (minute===0 && second===0) {
    hour=12;
    m='Midnight';
  }else {
    hour=12;
    m='AM';
  }
}

console.log(`Current time is : ${hour} ${m}: ${minute} : ${second}`); // output: Current time is : 21 : 42 : 11
