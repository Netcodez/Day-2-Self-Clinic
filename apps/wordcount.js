module.exports = { 

<<<<<<< HEAD
words: function (word) {
var newText = word.replace(/[\s]+/, " ");
=======
words:function (word) {
var newText = inputText.replace(/[\s]+/, " ")
>>>>>>> 0dcd4463a076fbdfad26fb723e403ef9116126df

var splitWord = newText.split(" ");  
var wordCount = {};
  
  for (var i = 0;i<splitWord.length;i++) {
    var eachWord = splitWord[i];

     
      if (wordCount.hasOwnProperty(eachWord)) {
          wordCount[eachWord]++;
      } 
      else {
          wordCount[eachWord] = 1;
      }
  }
  return wordCount;
}


<<<<<<< HEAD
}
=======
 }
>>>>>>> 0dcd4463a076fbdfad26fb723e403ef9116126df
