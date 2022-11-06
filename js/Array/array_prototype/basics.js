// Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象
// Array.prototype 属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。

// 1. 获取相应的属性名称
const n1 = Object.getOwnPropertyNames(Array);
// Array是一个 function对象，是JS的内置对象
// [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]

const n2 = Object.getOwnPropertyNames(Array.prototype);
// JS中所有的数组方法均来自于Array.prototype，
// 和其他构造函数一样，你可以通过扩展 Array 的 prototype 属性上的方法来给所有数组实例增加方法
/*[
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'at'
]*/

// 2.1 给Array对象添加新的方法 .duplicator()
const arr = [1, 2, 3];

Array.prototype.duplicator = function () {
  return this.concat(this);
}

const duplicatorArr = arr.duplicator(); // [ 1, 2, 3, 1, 2, 3 ]


const arr1 = ["football", "basketball"];
const arr2 = ["volleyball", "badminton"];

const arr3 = arr1.concat(arr2); // [ 'football', 'basketball', 'volleyball', 'badminton' ]

let i = Array.prototype.push.apply(arr1, arr2); // 4
console.log(arr1); //[ 'football', 'basketball', 'volleyball', 'badminton' ]

// 2.2 给一个构造函数添加新的方法
function Car(color, model, dateManufactured) { // 1.创建constructor(构造函数)
  this.color = color;
  this.model = model;
  this.dateManufactured = dateManufactured;
}

Car.prototype.getColor = function () { // 2.在prototype(原型)上添加方法
  return this.color;
}
Car.prototype.getModel = function () { // 在prototype(原型)上添加方法
  return this.model;
}
Car.prototype.carDate = function () { // 在prototype(原型)上添加方法
  return `This ${this.model} was manufactured in the year ${this.dateManufactured}`;
}

const firstCar = new Car("red", "Ferrari", "2008"); // 生成instance(实例)
