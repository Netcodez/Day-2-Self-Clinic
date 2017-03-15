#!/usr/bin/env node

var program = require('commander');
var googleMapsClient = require('@google/maps').createClient ({
  key: 'AIzaSyDs_nf9H4KHLJgkDdXqBc26ayvlq2koT_Q'
});

program
  .arguments('<add>')
  .action(function(add){
    googleMapsClient.geocode({
      address: add
      }, function (err, response){
        if (!err){
          var res = response.json.results;
          var longitude = res[0].geometry.location.lng;
          var latitude = res[0].geometry.location.lat;
          var location = res[0].formatted_address;
          console.log("Location is: " + location);
          console.log("Longitude is: " + longitude);
          console.log("Latitude is: " + latitude);
        }
      });
  })
  .parse(process.argv);

