//A simple command line consumes a twitter API

var Twitter = require('twitter');
 
var client = new Twitter({
  api_key:'T5op5tfnggjudlghhgugi',
  api_secret:'DujlodjhnrudlsiihncXbvIFKwjWFKBlGeV16XEfsStb2DW9PC',
  oauth_token:'42647953-r2kitodnope4hhghguyuyKudoplchtjultx9oprB',
oAuth__token_secret:'t7utLubnhtboNcnSLaphtrkufiLeypphyy8zzhJTBNeZ' 

});
// using get 
 client.get('favorites', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);   
  console.log(response);   
}); 

//posting a tweet
  client.post('update status', {status: 'Hello World!'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);   
  console.log(response);  
});
