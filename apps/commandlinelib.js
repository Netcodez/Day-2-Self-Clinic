
var Twitter = require('twitter');
 
var client = new Twitter({
  api_key:'U8dqeKAECXkURURfCBlrAhiMW',
  api_secret:'Bh9w7mif2LcqyoZRmU7XbvIFKwjWFKBlGeV16XEfsStb2DW9PC',
  oauth_token:'81451848-qZ8DIIN2p2F4dxl9BW9E57xpoOrpMx604Kx99QTYK',
  oauth__token_secret:'bl7WAeoUaNboNcnSLAcy4SFULdZ6ZO55M2aazzhJTBNeZ'


});
// using get 
 client.get('favorites/lists', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);   
  console.log(response);   
}); 

//posting a tweet
  client.post('status/update', {status: 'Hello World!'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);   
  console.log(response);  
});
