// var csv = require('csv');
// Node packages for file system
var fs = require('fs');
var path = require('path');
var s = require("underscore.string");

// read the public holidays csv
var filePath = path.join(__dirname, 'data/2015-2016-australianpublicholidays.csv');

// Read CSV
var f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
    function(err){console.log(err);});

// Split on row
f = f.split("\r\n");

// Get first row for column headers
headers = f.shift().split(",");
console.log(headers);

var json = [];    
f.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(",")
    for(var i = 0; i < headers.length; i++){
        tmp[headers[i]] = s(row[i]).trim().value();
    }
    // Add object to list
    json.push(tmp);
});

// output json to console
console.log(json);