const crypto = require('crypto')

const hmac = crypto.createHmac('sha256', 'testsecretsecure');
const res = hmac.digest('base64');

var moment = require('moment');
var date = moment("2018-12-06 - 21:46:43", "YYYY-MM-DD - HH:mm:ss");


var remainder = (date.minute() % 15);
if(remainder == 15){
	remainder=0;
}
var roundedDate = date.subtract(remainder, "minutes").second(0)//.format("YYYY-MM-DD - HH:mm");

console.log(roundedDate);