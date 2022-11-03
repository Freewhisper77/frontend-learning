// 请以如下的规则去abbreviate给定的字符串
// first letter + string.length + last letter
// & Words that have less than 4 letters aren't abbreviated, because that would just be odd.
// 例子：K8s means Kubernetes

// 【任务1】The input is a sentence, and you should abbreviate every word that is 4 letters long or longer.
const input = 'Every developer likes to mix kubernetes and javascript';
// expected 'E3y d7r l3s k8s j8t'

// 1. string.split(' '):string->array
// 2. array.filter length>=4
// 3.array.map()遍历 用getAbbreviate函数使之->每个单词的对应的缩写的array
// 4.array.join() -> string

const result = input.split(' ')
  .filter((v) => v.length >= 4)
  .map((str) => `${str[0]}${str.length -2}${str[str.length - 1]}`)
  .join(' ');

// function getAbbreviate(string) {
//   const length = string.length;
//   const firstLetter = string[0];
//   const lastLetter = string[length - 1];
//   return firstLetter + (length-2) + lastLetter;
// }

console.log(result); // E3y d7r l3s k8s j8t

// 【任务2】expected 'E3y d7r l3s to k8s and j8t'
// 即letter.length<4的不去掉 保留 直接输出
// 思考：那就不要先用filter去处理 -> 而是在map的callbackFn中加if判断
const result1 = input.split(' ')
  .map(getAbbreviate)
  .join(' ');

function getAbbreviate(str) {
  if (str.length >= 4) {
    return `${str[0]}${str.length -2}${str[str.length - 1]}`;
  }else {
    return str;
  }
}

console.log(result1); // E3y d7r l3s to mix k8s and j8t
