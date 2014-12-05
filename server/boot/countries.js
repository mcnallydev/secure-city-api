var countries = require('country-data').countries;
module.exports = function countriesInit(server) {
  if (!process.env.LOOPBACK_AUTO) {
    var Country = server.models.country;

    Country.count(function(error, count) {
      if (!count) {
        countries.all.forEach(function(country) {
          Country.create({
            name: country.name
          }, function(err, result) {
            if (err) {
              throw (err);
            }
            else {
              console.log('✓ ' + result.name);
            }
          });
        });
      }
    });
  }
};
