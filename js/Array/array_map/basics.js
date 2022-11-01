// array.map() 方法创建一个新数组 ｜ 并且你是希望继续使用得到的新数组
// 返回值：一个新数组（每个元素都是回调函数的返回值）
// 新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成

// ⚠️callbackFn 只会在【有值】的索引上被调用；
// 那些从来没被赋过值或者使用 delete 的索引则不会被调用。

// ⚠️因为 map 生成一个新数组，当你不打算【使用返回的新数组】却使用 map 是违背设计初衷的，
// 请用 forEach 或者 for-of 替代。
// => 不应该使用map的情况：1.你不打算使用返回的新数组 2.你没有从回调函数中返回值

// 🌟map 方法处理数组元素的范围是在 callbackFn 方法第一次调用之前就已经确定了。
// 调用 map 方法之后追加的数组元素不会被 callbackFn 访问。
// 如果存在的数组元素改变了，那么传给 callbackFn 的值是 map 访问该元素时的值。
// 在 map 函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。

const arr = [ 1, 4, 9, 16 ];

const doubleArr = arr.map(x => x * 2); // [ 2, 8, 18, 32 ]
// 练习1. 求数组中每个元素的平方根
const roots = arr.map(x => Math.sqrt(x)); // [ 1, 2, 3, 4 ]

// 练习2. 重新格式化数组中的对象
// 创建一个包含对象的数组
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
// 重新创建一个格式化后的数组
const reformattedArray = kvArray.map(({ key, value }) =>
  ({ [key]: value })); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]

// 练习3. 🌟如何在一个String上使用.map()
// -> 获取字符串中每个字符所对应的 ASCII 码组成的数组
const map = Array.prototype.map;
// Array构造函数的API，我们可以通过控制台打印Array.prototype可以知道有以下这些方法。
// 这是Array的原型对象的所有方法，对数组而言是可以继承所有的这些方法的：
const words = 'Hello World';
// call()方法调用【具有给定值】和【单独提供参数的函数】
const charCodes = map.call(words,x => x.charCodeAt(0));
// charCodes 现在等于 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// 通常情况下，map 方法中的 callbackFn 函数只需要接受一个参数，
// 就是正在被遍历的数组元素本身。
// 但这并【不意味】着 map 只给 callbackFn 传了一个参数。
// 这个思维惯性可能会让我们犯一个很容易犯的错误。

const number = [1, 2, 3, 4];
const filterNumber = number.map ((v, i) => {
  if (i < 3) {
    return v;
  }
});
console.log(filterNumber); // [ 1, 2, 3, undefined ]
console.log(number); // [ 1, 2, 3, 4 ]
