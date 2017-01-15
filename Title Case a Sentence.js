
function titleCase(str) {
  var myArray2 = [];
//convert all characters to lower case
str = str.toLowerCase();
//split words (" ")in str into elements in an array
var myArray = str.split(" ");

//Use forEach array method on each word that is more than 1 character long in the myArray array
//element.toUpperCase().slice(0, 1) takes the first character in a word and concatinates (+)
// to with the sencond character until the last one using element.substring(1)
//The new concatinated word is assigned to newWord and pushed to the end of MyArray2
myArray.forEach(function(element) {
   if (element.length > 1) {
    newWord = element.toUpperCase().slice(0, 1) + element.substring(1);
    myArray2.push(newWord);
   }
   //if a word only has one letter than the letter is turned to uppercase and
   // is pushed to myArray2
   else {
       newWord = element.toUpperCase();
       myArray2.push(newWord);
   }
});
//myArray2 is joined into a string (str)
str = myArray2.join(" ");
//function returns str
  return str;
}

titleCase("I'm a little tea pot");
