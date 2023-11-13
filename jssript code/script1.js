function reverse(sentence) {
  var words = sentence.split(' ');
  var reversedWords = [];

  for (var i = 0; i < words.length; i++) {
    var reversedWord = '';

    for (var j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }

    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
}

var input = "reversing a sentence for assignment";
var reversed = reverse(input);
console.log(reversed);
