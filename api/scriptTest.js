const crypto = require('crypto')

const hmac = crypto.createHmac('sha256', 'testsecretsecure');
const res = hmac.digest('base64');

var moment = require('moment');
var date = moment("2018-12-06 - 21:46:43", "YYYY-MM-DD - HH:mm:ss");


var start = Date.parse('2019-01-10 07:00:00');
var end = Date.parse('2019-01-10 09:00:00');

if(Date.parse('2019-01-10 08:00:00')>start){
	console.log('YES');
}