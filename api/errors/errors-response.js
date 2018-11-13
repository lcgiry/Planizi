module.exports.RessourceNotFound = function (message){
	return {
		"error": "RessourceNotFound",
		"code": 404,
		"message": message
	}
};

module.exports.BadRequest = function (message){
	return {
		"error": "BadRequest",
		"code": 400,
		"message": message
	}
};

module.exports.AuthenticationRequired = function (message){
	return {
		"error": "AuthenticationRequired",
		"code": 401,
		"message": message
	}
};

module.exports.ForbiddenRessource = function (message){
	return {
		"error": "ForbiddenRessource",
		"code": 403,
		"message": message
	}
};

module.exports.InternalServerError = function (message){
	return {
		"error":"InternalServerError",
		"code": 500,
		"message": message
	}
};

module.exports.ContentTypeInvalid = function (message){
	return {
		"error": "ContentTypeInvalid",
		"code": 406,
		"message": message
	}
};

module.exports.UnsupportedMediaTypeError = function (message){
	return {
		"error": "UnsupportedMediaTypeError",
		"code": 415,
		"message": message
	}
};

module.exports.RessourceAlreadyExist = function (message){
	return {
		"error":"RessourceAlreadyExist",
		"code": 404,
		"message": message
	}
};

module.exports.GenericError = function (label, code, message){
	return {
		"error": label,
		"code": code,
		"message": message
	}
};
