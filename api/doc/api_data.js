define({ "api": [
  {
    "group": "SKILL",
    "type": "DELETE",
    "url": "/skill/skill/:label",
    "title": "Delete the skill",
    "description": "<p>Delete definitively the skill of the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label of the skill (ID)</p>"
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
    "filename": "routes/skill.js",
    "groupTitle": "SKILL",
    "name": "DeleteSkillSkillLabel",
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
    "group": "SKILL",
    "type": "GET",
    "url": "/skill/skill/:label",
    "title": "Get one skill",
    "description": "<p>Retrieve all information about a skill</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label given to the skill (ID)</p>"
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
            "field": "skill_label",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skill_name",
            "description": "<p>The english name of the skill to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skill_name_fr",
            "description": "<p>The french name of the skill to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skill_description",
            "description": "<p>The description of the skill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "cratedAt",
            "description": "<p>The creation date of the skill raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the skill raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/skill.js",
    "groupTitle": "SKILL",
    "name": "GetSkillSkillLabel",
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
    "group": "SKILL",
    "type": "GET",
    "url": "/skill/skills",
    "title": "Get all skills",
    "description": "<p>Retrieve all information about all skills inserted</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "skills",
            "description": "<p>The array with all users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_label",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_name",
            "description": "<p>The english name of the skill to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_name_fr",
            "description": "<p>The french name of the skill to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_description",
            "description": "<p>The description of the skill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "cratedAt",
            "description": "<p>The creation date of the skill raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the skill raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/skill.js",
    "groupTitle": "SKILL",
    "name": "GetSkillSkills",
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
    "group": "SKILL",
    "type": "GET",
    "url": "/skill/users/:label",
    "title": "Get all users linked to a skill",
    "description": "<p>Retrieve all users linked linked to a particular skill</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label given to the skill (ID)</p>"
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
            "field": "skill",
            "description": "<p>The skill related to the next users</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The array with all users linked to the skill</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.user_skill",
            "description": "<p><em>JOIN TABLE</em> The association table between skills and users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_skill.skill_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_skill.skill_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_skill.skill_skill",
            "description": "<p><em>JOIN TABLE</em> The foreign key to skill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_skill.cratedAt",
            "description": "<p><em>JOIN TABLE</em> The creation date of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_skill.updatedAt",
            "description": "<p><em>JOIN TABLE</em> The last date update of the raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/skill.js",
    "groupTitle": "SKILL",
    "name": "GetSkillUsersLabel",
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
    "group": "SKILL",
    "type": "POST",
    "url": "/skill/skill/",
    "title": "Post a new skill",
    "description": "<p>Create a new skill in database</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_label",
            "description": "<p><code>REQUIRED</code> The label given to the skill (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_name",
            "description": "<p><code>REQUIRED</code> The english name of the skill to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_name_fr",
            "description": "<p><code>REQUIRED</code> The french name of the skill to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_description",
            "description": "<p>The description of the skill</p>"
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
            "field": "skill_label",
            "description": "<p>The skill label of the new skill.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/skill.js",
    "groupTitle": "SKILL",
    "name": "PostSkillSkill",
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
    "group": "SKILL",
    "type": "PUT",
    "url": "/skill/skill/:label",
    "title": "Update a skill",
    "description": "<p>Update a skill</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label of the skill (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_label",
            "description": "<p>The label given to the skill (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_name",
            "description": "<p>The english name of the skill to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_name_fr",
            "description": "<p>The french name of the skill to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "skill_description",
            "description": "<p>The description of the skill</p>"
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
    "filename": "routes/skill.js",
    "groupTitle": "SKILL",
    "name": "PutSkillSkillLabel",
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
    "type": "DELETE",
    "url": "/user/user/:mail",
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
            "description": "<p><code>REQUIRED</code> The mail of the user to delete (ID)</p>"
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
    "name": "DeleteUserUserMail",
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
    "url": "/user/skills/:mail",
    "title": "Get all skills of an user",
    "description": "<p>Retrieve all skills about an users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p><code>REQUIRED</code> The mail of the user to retrieve for get his skills (ID)</p>"
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
            "field": "user",
            "description": "<p>The user related to the next skills</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "skills",
            "description": "<p>The array with all skills of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_label",
            "description": "<p>The label given to the skill (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_name",
            "description": "<p>The english name of the skill to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_name_fr",
            "description": "<p>The french name of the skill to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.skill_description",
            "description": "<p>The description of the skill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "skills.cratedAt",
            "description": "<p>The creation date of the skill raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "skill.updatedAt",
            "description": "<p>The last date update of the skill raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "skill.user_skill",
            "description": "<p><em>JOIN TABLE</em> The association table between skills and users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "skill.user_skill.skill_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.user_skill.skill_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.user_skill.skill_skill",
            "description": "<p><em>JOIN TABLE</em> The foreign key to skill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "skills.user_skill.cratedAt",
            "description": "<p><em>JOIN TABLE</em> The creation date of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "skills.user_skill.updatedAt",
            "description": "<p><em>JOIN TABLE</em> The last date update of the raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "GetUserSkillsMail",
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
    "url": "/user/user/:mail",
    "title": "Get one user",
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
    "name": "GetUserUserMail",
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
    "url": "/user/user/",
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
    "name": "PostUserUser",
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
    "url": "/user/user/:mail",
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
    "name": "PutUserUserMail",
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
