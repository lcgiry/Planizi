define({ "api": [
  {
    "group": "USER",
    "type": "get",
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
            "description": "<p>The mail of the user to retrieve (ID)</p>"
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
            "description": "<p>Mail of the user (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_surname",
            "description": "<p>Surname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_nickname",
            "description": "<p>Nickname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_gender",
            "description": "<p>The gender ('m' or 'f')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_phone",
            "description": "<p>Phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user_birthdate",
            "description": "<p>Birthdate of the user</p>"
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
  }
] });