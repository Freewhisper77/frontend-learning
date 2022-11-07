// 1. 使用 call 方法调用函数并且指定上下文的 'this'

// 在下面的例子中，当调用 greet 方法的时候，该方法的this值会绑定到 obj 对象。

function greet() {
  // const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  // const reply = `${this.animal} typically sleep between ${this.sleepDuration};`
  const reply = `${obj.animal} typically sleep between ${obj.sleepDuration}`;
  // 上面这三种写法得到的结果相同
  console.log(reply);
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
greet.apply(obj);  // cats typically sleep between 12 and 16 hours


// 2. 使用 call 方法调用函数并且不指定第一个参数（argument）

// 在下面的例子中，我们调用了 display 方法，但并没有传递它的第一个参数。
// 如果没有传递第一个参数，this 的值将会被绑定为全局对象。
// const sData = 'Wisen';
//
// function display() {
//   console.log('sData value is %s ', this.sData);
// }
//
// display.call();  // sData value is Wisen
