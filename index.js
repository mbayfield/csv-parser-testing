// var csv = require('csv');
// Node packages for file system
var fs = require('fs');
var path = require('path');
var s = require("underscore.string");
var moment = require("moment");
var Baby = require("babyparse");
// read the public holidays csv
var filePath = path.join(__dirname, 'data/2015-2016-australianpublicholidays.csv');

// Read CSV
var f = fs.readFileSync( filePath, { encoding: 'utf-8'}, function(err)
    	{console.log(err);
    });

// console.log(Baby.parse(f,{
//     header: true
// }));

// Split on row
// f = f.split("\r\n");

// Get first row for column headers
// var headers = f.shift().split(",");
// console.log(headers);

var stateList = [
'ACT','NSW','NT','QLD','SA','TAS','VIC','WA'
]

var json = Baby.parse(f,{
    header: true
}).data;

json.forEach(function(d) {
    if(d.State === 'NAT') {
        d.State = stateList;
    } else {
        d.State = [d.State.replace(/['|']/g,',')];    
    }
    
    // if (d['Date'] ==='Date') {
        console.log(d['Date']);
        // console.log(moment(row[i], "YYYYMMDD").format());
        d['Date'] = moment(d['Date'], "YYYYMMDD").format();
    // } 
    
});

// 'ACT','NSW','NT','QLD','SA','TAS','VIC','WA'
 // 
// f.forEach( function(d) {
   
//     // Loop through each row
//     var tmp = {};
//     var row = d.split(",");
    
//     for(var i = 0; i < headers.length; i++) {
        
//         if (headers[i] ==='Date') {
//             // console.log(headers[i]);
//             // console.log(moment(row[i], "YYYYMMDD").format());
//             tmp[headers[i]] = moment(row[i], "YYYYMMDD").format();
//         } else if (headers[i] ==='State') {
//             // console.log(headers[i]);
//             // console.log([row[i].replace('|',',')]);
//             tmp[headers[i]] = [row[i].replace('|',',')];
//         } else {
//             tmp[headers[i]] = s(row[i]).trim().value();    
//         }
        
//     }
    
//     // Add object to list
//     json.push(tmp);
// });

// output json to console
console.log(json);