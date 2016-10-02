var moment = require('moment');

console.log(moment().format());

// January 1, 1970 @ 12:00am

var now = moment();

console.log('Current timestamp:' + now.unix());

var timestamp = 1475322170;

var currentMoment = moment.unix(timestamp);
console.log('Current moment: ' + currentMoment.format('MMM D, YY @ hh:m a'));
console.log('Current moment: ' + currentMoment.format('MMMM Do, YYYY @ hh:m A'));
