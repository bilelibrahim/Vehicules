'use strict';

var request = require('request');
require('request').debug = true;

var host = 'http://localhost:8581/virtual/vehicles';

exports.getVehicles = function (req, res) {

    request(host, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/javascript');
            res.jsonp({
                'vehicles': JSON.parse(body)._embedded.vehicles
            });
            //console.log(body);
        } else {
            console.error(error);
        }
    });
};