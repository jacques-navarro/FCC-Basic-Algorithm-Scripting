
function palindrome(str) {
  // Good luck!

  //convert str all characters to lower case
str = str.toLowerCase();
  //remove special characters from str
str = str.replace(/[^\w\d]/g, "");
  //make copy of str in str2 and convert to lower case
var str2 = str.toLowerCase();
  //remove all special characters from str2
str2 = str2.replace(/[^\w]/g, "");

  //declare myArray an iniatialize to as empty
var myArray = [];
  //take contents of str2, separated by spaces and assign to myArray removing spaces
myArray = str2.split("");
  //reverse order of elements in myArray
 myArray.reverse();
  //take elements of myArray and assign to str2 without spaces
str2 = myArray.join("");

  //return true if str and str2 are equal, false if they are not
  if (str === str2) {
    return true;
  }
  else if (str !== str2) {
    return false;
  }
}

palindrome("eye");
