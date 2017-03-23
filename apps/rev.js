module.exports = {
  rev:function (word) {
    var wordrev = "";
  
    if (word === ''){               //if word is empty it returns null
      return null;
    }
     else{
      var i = word.length - 1;      
      while (i >= 0) {
        wordrev += word[i];       //this line of code  reverses the word
        i--;
      }

     }
    
      if (word === wordrev){      //if word is a palindrome it returns true
        return true;
      }
    else{
      return wordrev;
    }
 
  }
}