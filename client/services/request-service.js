var rp = require('request-promise');
var serverConfig = require('../config/server');

//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.requestGET = function(url){
	var request = {method: 'GET', uri: serverConfig.server+url, resolveWithFullResponse: true};
	return rp(request);
};


module.exports.isResponseJSONContentType= function(response){
	if(response.headers['content-type'].match(/application\/json/g)) {
		return true;
	}else{
		return false;
	}
};

module.exports.isNotResponseError= function(response){
	if(response.body.error) {
		return false;
	}else{
		return true;
	}
};
