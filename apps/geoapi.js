var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDYepC41G-B5tPe5NgKNNna-KtJx5YREo8'
});

// Geocode an address.
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});