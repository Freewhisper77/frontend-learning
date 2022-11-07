// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来【调用一个函数】。
// ps: 该方法的语法和作用与 apply() 方法类似，只有一个区别:
// 就是 call() 方法接受的是【一个参数列表】，而 apply() 方法接受的是【一个包含多个参数的数组】。
// func.call(this, 'eat', 'bananas') vs. func.apply(this, ['eat', 'bananas']) .

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('cheese', 5);
// Food { name: 'cheese', price: 5, category: 'food' }
const fun = new Toy('robot', 20)
// Toy { name: 'robot', price: 20, category: 'toy' }

function User() {
  this.name = 'p';
}

const val = new User(); // User { name: 'p' }

console.log(val._proto_=== User.prototype);
