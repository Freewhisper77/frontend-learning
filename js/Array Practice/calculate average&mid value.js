// 计算输入数组中数字元素的平均值和中值。
const arr = [12, 46, 32, 64];
// Task1. 计算sum + 拿到数字元素个数
// Resolve: array.reduce
const n = arr.length;

const averageValue = getAverage(arr);
const midValue = getMid(arr);

function getAverage(array) {
  const sum = array.reduce((x, y) => x + y);
  return sum / n;
}

// Task2. sort升序排序 + 根据index拿中间的value（注意length的奇偶）
// sort直接修改原数组
arr.sort((a, b) => a - b); // arr = [ 12, 32, 46, 64 ]

function getMid(array) {
  if (n % 2 === 0) {
    return (array[n/2 - 1] + array[n/2])/2;
  }else {
    // Math.floor()向下取整
    const midIndexWhenOdd = Math.floor(n/2);
    return array[midIndexWhenOdd];
  }
}

console.log(` mean: ${averageValue}, median: ${midValue} `);
/*******************************************************************/
const input = [12, 46, 32, 64];
input.sort((a, b) => a - b);
// 第一次调用 callbackFn (reducer函数)时参数 previousValue (是我们这里的accumulator参数) 的值
const result = input.reduce((accumulator, currentValue, index, array) => {
  accumulator.mean += currentValue /  array.length;

  if(Math.abs(index + 1  - array.length / 2) < 1) {
    accumulator.median = currentValue;
  }

  return accumulator;
},{ mean: 0, median: 0 });

console.log(result);
