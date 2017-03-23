module.exports = {
  words : function (word) {
    var newText = word.replace(/[\s]+/, " ");    //this is a regular expression to remove non string characters

    var splitWord = newText.split(" ");           // this splits the string into seperate words in an array
    var wordCount = {};
  
    for (var i = 0;i<splitWord.length;i++) {
      var eachWord = splitWord[i];

     
      if (wordCount.hasOwnProperty(eachWord)) {
          wordCount[eachWord]++;                  // this line of counts the number the times word appears
      } 
      else {
          wordCount[eachWord] = 1;
      }
    }
    return wordCount;
  }


 }
    
