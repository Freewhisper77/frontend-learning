// 调用new Date() (Date()构造函数)返回一个Date对象。
const date = new Date();
console.log(date); // 2022-10-26T08:55:43.824Z

// 1.获取今年年份
const year = new Date().getFullYear();
console.log(year); // 2022

console.log(new Date().getDate());
console.log(new Date().getMonth());
console.log('h',new Date().getHours());
console.log('m',new Date().getMinutes());
console.log('s',new Date().getSeconds());

// 2.时间戳
const timestamp = Date.now();
console.log(timestamp); // 1667104635379

// 3.new Date() 参数格式
const birthday = new Date('June 28, 2000 16:15:30');
const date1 = birthday.getDate();
console.log(date1); // 28
