// 请以如下的规则去abbreviate给定的字符串
// first letter + string.length + last letter
// & Words that have less than 4 letters aren't abbreviated, because that would just be odd.
// 例子：K8s means Kubernetes

// 【任务】The input is a sentence, and you should abbreviate every word that is 4 letters long or longer.
const input = 'Every developer likes to mix kubernetes and javascript';
// expected 'E3y d7r l3s k8s j8t'

// 1. string.split(' '):string->array
// 2. array.filter length>=4
const x = input.split(' ');
console.log(x);
console.log(x[0].length); // 5
const y = x.filter((v) => v.length >= 4);
console.log(y); //[ 'Every', 'developer', 'likes', 'kubernetes', 'javascript' ]

// 3.array.map()遍历 用getAbbreviate函数使之->每个单词的对应的缩写的array
// 4.array.join() -> string
const z = y.map(getAbbreviate).join(' ');
console.log(z);

function getAbbreviate(string) {
  const length = string.length;
  const firstLetter = string[0];
  const lastLetter = string[length - 1];
  return firstLetter + (length-2) + lastLetter;
}
