define({ "api": [
  {
    "group": "USER",
    "type": "DELETE",
    "url": "/user/:mail",
    "title": "Delete the user",
    "description": "<p>Delete definitively the user of the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p><code>REQUIRED</code> The mail of the user to retrieve (ID)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "NOCONTENT",
            "description": "<p><em>No content sent</em></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "DeleteUserMail",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": "<p>You must be authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContentTypeInvalid",
            "description": "<p>The content-type of the request is invalid..</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnsupportedMediaTypeError",
            "description": "<p>The body passed is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RessourceAlreadyExist",
            "description": "<p>The ressource already exists</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The problem is due to the server</p>"
          }
        ]
      }
    }
  },
  {
    "group": "USER",
    "type": "GET",
    "url": "/user/:mail",
    "title": "Get user information",
    "description": "<p>Retrieve all information about an user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p><code>REQUIRED</code> The mail of the user to retrieve (ID)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_mail",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_surname",
            "description": "<p>The surname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_gender",
            "description": "<p>The gender of the user ('m' or 'f')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_phone",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user_birthdate",
            "description": "<p>The birthdate in YYYY-MM-DD format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_description",
            "description": "<p>The description written by the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_experience",
            "description": "<p>The personal experience of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_incapacity",
            "description": "<p>The possible incapacities og the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_teeshirt_size",
            "description": "<p>The teeshirt-size of the user ('S', 'M', 'L' or 'XL')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_trust_point",
            "description": "<p>The trust point given for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_involvement_point",
            "description": "<p>The involvement point given for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_happiness_point",
            "description": "<p>The happiness level of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_rights",
            "description": "<p>The ID rights of the user among all rights stored in 'rights' table</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_role",
            "description": "<p>The ID role of the user among all roles stores in 'role' table</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_social_security_card_number",
            "description": "<p>The SSN of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_social_security_card_file",
            "description": "<p>The path file of the SS card of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_identity_card_file",
            "description": "<p>The path file of the Identity card of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_cv_file",
            "description": "<p>The path file of the cv of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user_last_login",
            "description": "<p>The date of the last login user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "cratedAt",
            "description": "<p>The creation date of the user raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the user raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "GetUserMail",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": "<p>You must be authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Your request is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user does not exist.</p>"
          }
        ]
      }
    }
  },
  {
    "group": "USER",
    "type": "GET",
    "url": "/user/users",
    "title": "Get all users",
    "description": "<p>Retrieve all information about all users</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The array with all users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_mail",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_surname",
            "description": "<p>The surname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_gender",
            "description": "<p>The gender of the user ('m' or 'f')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_phone",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_birthdate",
            "description": "<p>The birthdate in YYYY-MM-DD format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_description",
            "description": "<p>The description written by the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_experience",
            "description": "<p>The personal experience of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_incapacity",
            "description": "<p>The possible incapacities og the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_teeshirt_size",
            "description": "<p>The teeshirt-size of the user ('S', 'M', 'L' or 'XL')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_trust_point",
            "description": "<p>The trust point given for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_involvement_point",
            "description": "<p>The involvement point given for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_happiness_point",
            "description": "<p>The happiness level of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_rights",
            "description": "<p>The ID rights of the user among all rights stored in 'rights' table</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_role",
            "description": "<p>The ID role of the user among all roles stores in 'role' table</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_social_security_card_number",
            "description": "<p>The SSN of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_social_security_card_file",
            "description": "<p>The path file of the SS card of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_identity_card_file",
            "description": "<p>The path file of the Identity card of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_cv_file",
            "description": "<p>The path file of the cv of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_last_login",
            "description": "<p>The date of the last login user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.cratedAt",
            "description": "<p>The creation date of the user raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.updatedAt",
            "description": "<p>The last date update of the user raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "GetUserUsers",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": "<p>You must be authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Your request is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user does not exist.</p>"
          }
        ]
      }
    }
  },
  {
    "group": "USER",
    "type": "POST",
    "url": "/user",
    "title": "Post a new user",
    "description": "<p>Create a new user in database</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_mail",
            "description": "<p><code>REQUIRED</code> The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p><code>REQUIRED</code> The name of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_surname",
            "description": "<p>The surname of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_gender",
            "description": "<p><code>REQUIRED</code> The gender of the user ('m' or 'f')</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_phone",
            "description": "<p><code>REQUIRED</code> The phone number of the user</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "user_birthdate",
            "description": "<p><code>REQUIRED</code> The birthdate in YYYY-MM-DD format</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_description",
            "description": "<p>The description written by the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_experience",
            "description": "<p>The personal experience of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_incapacity",
            "description": "<p>The possible incapacities og the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_teeshirt_size",
            "description": "<p>The teeshirt-size of the user ('S', 'M', 'L' or 'XL')</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "user_trust_point",
            "description": "<p>The trust point given for the user</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "user_involvement_point",
            "description": "<p>The involvement point given for the user</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "user_happiness_point",
            "description": "<p>The happiness level of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_rights",
            "description": "<p>The ID rights of the user among all rights stored in 'rights' table</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_role",
            "description": "<p>The ID role of the user among all roles stores in 'role' table</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_social_security_card_number",
            "description": "<p>The SSN of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "user_mail",
            "description": "<p>The user mail of the new user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "PostUser",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": "<p>You must be authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContentTypeInvalid",
            "description": "<p>The content-type of the request is invalid..</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnsupportedMediaTypeError",
            "description": "<p>The body passed is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RessourceAlreadyExist",
            "description": "<p>The ressource already exists</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The problem is due to the server</p>"
          }
        ]
      }
    }
  },
  {
    "group": "USER",
    "type": "PUT",
    "url": "/user/:mail",
    "title": "Update the user",
    "description": "<p>Update an user with new information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p><code>REQUIRED</code> The mail of the user to retrieve (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_surname",
            "description": "<p>The surname of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_gender",
            "description": "<p>The gender of the user ('m' or 'f')</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_phone",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "user_birthdate",
            "description": "<p>The birthdate in YYYY-MM-DD format</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_description",
            "description": "<p>The description written by the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_experience",
            "description": "<p>The personal experience of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_incapacity",
            "description": "<p>The possible incapacities og the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_teeshirt_size",
            "description": "<p>The teeshirt-size of the user ('S', 'M', 'L' or 'XL')</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "user_trust_point",
            "description": "<p>The trust point given for the user</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "user_involvement_point",
            "description": "<p>The involvement point given for the user</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "user_happiness_point",
            "description": "<p>The happiness level of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_rights",
            "description": "<p>The ID rights of the user among all rights stored in 'rights' table</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_role",
            "description": "<p>The ID role of the user among all roles stores in 'role' table</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_social_security_card_number",
            "description": "<p>The SSN of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "NOCONTENT",
            "description": "<p><em>No content sent</em></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "PutUserMail",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequired",
            "description": "<p>You must be authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContentTypeInvalid",
            "description": "<p>The content-type of the request is invalid..</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnsupportedMediaTypeError",
            "description": "<p>The body passed is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RessourceAlreadyExist",
            "description": "<p>The ressource already exists</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The problem is due to the server</p>"
          }
        ]
      }
    }
  }
] });
