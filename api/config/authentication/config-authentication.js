const apiKeyAuth = require('api-key-auth');

const apiKeys = new Map();
apiKeys.set('aleatoireID', {id: 1, name: 'planizi_web_client', secret: 'testsecretsecure'});

function getSecret (keyId, done){
	if (!apiKeys.has(keyId)) {
		done(new Error('Unknown api key'));
	}
	const clientApp = apiKeys.get(keyId);
	done(null, clientApp.secret, {
		id: clientApp.id,
		name: clientApp.name
	});
};

module.exports = apiKeyAuth({ getSecret });