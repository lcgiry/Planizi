const crypto = require('crypto')

const hmac = crypto.createHmac('sha256', 'testsecretsecure');
const res = hmac.digest('base64');

console.log(res.toString());