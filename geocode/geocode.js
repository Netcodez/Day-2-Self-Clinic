#!/usr/bin/env node

var program = require('commander'); // commander module is required to pass in arguments(address any place)
var googleMapsClient = require('@google/maps').createClient ({    //this is a google maps api sourced from google
  key: 'AIzaSyDs_nf9H4KHLJgkDdXqBc26ayvlq2koT_Q'                  //for any API to work it requires a key. This is the key to the google API
});

program
  .arguments('<add>')
  .action(function(add){
    googleMapsClient.geocode({
      address: add
      }, function (err, response){
        if (!err){
          var res = response.json.results;
          var longitude = res[0].geometry.location.lng;          //this gives the longitude of the address
          var latitude = res[0].geometry.location.lat;           // this gives the latitude of the address
          var location = res[0].formatted_address;               // this gives the formatted address
          console.log("Location is: " + location);
          console.log("Longitude is: " + longitude);
          console.log("Latitude is: " + latitude);
        }
      });
  })
  .parse(process.argv);

