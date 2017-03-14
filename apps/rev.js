module.exports = {
rev:function (word) {
  var wordrev = "";
  
  if (word === '') {
    return null;
  }
  else {
    var i = word.length - 1;
    while (i >= 0) {
      wordrev += word[i];
      i--;
    }
    
    if (word === wordrev) {
      return true;
    }
    else {
      return wordrev;
    }
  }
}
}