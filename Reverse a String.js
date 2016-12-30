//https://www.freecodecamp.com/challenges/reverse-a-string#?solution=%0Afunction%20reverseString(str)%20%7B%0A%20%20return%20str%3B%0A%7D%0A%0AreverseString(%22hello%22)%3B%0A


function reverseString(str) {
  //convert str into an array separated at each character
  var myArray = str.split("");
  //reverse array elements
  myArray.reverse();
  //convert array elements into a string
  //"" needed, commas added without quotes
  str = myArray.join("");

  return str;
}

reverseString("hello");
