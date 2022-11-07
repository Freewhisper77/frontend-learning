// 1.全局作用域下调函数时
function f1() {
  // 在严格模式下,函数体内的this会被绑定到undefined上。
  "use strict";
  console.log(this);
}
function f2() {
  // 在非严格模式下,函数体内的this会被绑定到全局对象window/global上。
  console.log(this);
  // 但是我们看的打印的结果不是window而是undefined 应该是现在默认都是严格模式了(个人猜测，未查证)
}

f1(); // undefined
f2(); // undefined

// 2.上下文对象中函数被调用时this指向
const info = {
  name: 'Emma',
  getName: function () {
    console.log(this.name);
  }
}

info.getName(); // Emma

// 3.箭头函数中的this指向
const name = 'Tony';
const age = 21;

const person = {
  name : 'Tony1',
  age : 22,
  getName: function () {
    console.log(this.name)
  },
  getAge: () => {
    // 箭头函数的this由外层函数决定，所以这里的this应该指向调用person的window，
    // 所以应该输出为window.age=21
    console.log(this.age)
  }
}

person.getName(); // Tony1
person.getAge(); // 21
