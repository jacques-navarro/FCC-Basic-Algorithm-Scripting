//Factorialize a Number
//https://www.freecodecamp.com/challenges/factorialize-a-number#?solution=%0Afunction%20factorialize(num)%20%7B%0A%20%20return%20num%3B%0A%7D%0A%0Afactorialize(5)%3B%0A

function factorialize(num) {
  var factorialTotal = 1;
  for (var i = num; i > 0; i--) {
    factorialTotal *= i;
  }
  num = factorialTotal;
  return num;
}

factorialize(5);
