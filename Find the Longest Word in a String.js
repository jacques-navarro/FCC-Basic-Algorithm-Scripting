//Find the Longest Word in a String

function findLongestWord(str) {
  var myArray = [];
  var longest = 0;
  myArray = str.split(" ");
  myArray.forEach(function(element) {
    var word = element.toString();
    if (word.length > longest) {
      longest = word.length;
    }
  });

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
