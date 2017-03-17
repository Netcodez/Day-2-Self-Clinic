module.exports = { 

words : function (word) {
var newText = word.replace(/[\s]+/, " ");

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


 }
    
