//https://www.freecodecamp.com/challenges/reverse-a-string#?solution=%0Afunction%20reverseString(str)%20%7B%0A%20%20return%20str%3B%0A%7D%0A%0AreverseString(%22hello%22)%3B%0A

function reverseString(str) {

  //combined split, reverse and join array methods into one line
  //split(""); convert str into an array separated at each character by ""
  //reverse(); reverse array elements
  //join(""); convert array elements into a string
  //"" needed, commas added without quotes

  return str.split("").reverse().join("");

}

reverseString("hello");
