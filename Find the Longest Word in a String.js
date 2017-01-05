//Find the Longest Word in a String

function findLongestWord(str) {
  var myArray = [];
  var longest = 0;

  //split words into array (divided by spaces)
  myArray = str.split(" ");

  //Iterate through array and convert words to String
  //if lenght of word is longer then var longest assign word.length to longest
  myArray.forEach(function(element) {
    var word = element.toString();
    if (word.length > longest) {
      longest = word.length;
    }
  });

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
