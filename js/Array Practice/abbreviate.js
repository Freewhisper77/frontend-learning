// 请以如下的规则去abbreviate给定的字符串
// first letter + string.length + last letter
// & Words that have less than 4 letters aren't abbreviated, because that would just be odd.
// 例子：K8s means Kubernetes

// 【任务】The input is a sentence, and you should abbreviate every word that is 4 letters long or longer.
const input = 'Every developer likes to mix kubernetes and javascript';

// 1. string.split(' '):string->array
// 2. array.filter length>=4
const x = input.split(' ');
console.log(x);
console.log(x[0].length); // 5
const y = x.filter((v) => v.length >= 4);
console.log(y); //[ 'Every', 'developer', 'likes', 'kubernetes', 'javascript' ]

const str = 'developer';
function getAbbreviate(string) {
  const length = string.length;
  const firstLetter = string[0];
  const lastLetter = string[length - 1];
  return console.log(firstLetter + length + lastLetter);
}
getAbbreviate(str); // d9r
