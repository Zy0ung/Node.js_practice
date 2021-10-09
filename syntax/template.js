//Template Literal

var name = 'wangwang';
var letter = "Dear "+name+"\n\
Hello, Dear "+name+" World!"; //줄바꿈

console.log(letter);

var letter = `Dear ${name}
Hello, ${name} World!`;

console.log(letter);

var sum = `1+1 = ${1+1}`;
console.log(sum)