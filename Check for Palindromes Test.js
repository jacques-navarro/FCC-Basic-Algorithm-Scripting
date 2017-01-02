//This file was used to test code in Chrome console
str = "not a palindrome";
str = str.toLowerCase();
str = str.replace(/[^\w]|[_]/g, "");

var str2 = str.toLowerCase();
str2 = str2.replace(/[^\w]|[_]/g, "");
console.log("replace: " + str2);

var myArray = [];
myArray = str2.split("");
console.log("split: " + myArray);

myArray.reverse();
console.log("reverse: " + myArray);

str2 = myArray.join("");
console.log("join: " + str2);
console.log(str);
console.log(str2);
console.log(myArray);
