define({ "api": [
  {
    "group": "ROLE",
    "type": "DELETE",
    "url": "/role/role/:label",
    "title": "Delete the role",
    "description": "<p>Delete definitively the role of the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label of the role (ID)</p>"
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
    "filename": "routes/role.js",
    "groupTitle": "ROLE",
    "name": "DeleteRoleRoleLabel",
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
    "group": "ROLE",
    "type": "GET",
    "url": "/role/role/:label",
    "title": "Get one role",
    "description": "<p>Retrieve all information about a role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label given to the role (ID)</p>"
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
            "field": "role_label",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p>The english name of the role to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role_name_fr",
            "description": "<p>The french name of the role to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role_description",
            "description": "<p>The description of the role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the role raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the role raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "ROLE",
    "name": "GetRoleRoleLabel",
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
    "group": "ROLE",
    "type": "GET",
    "url": "/role/roles",
    "title": "Get all roles",
    "description": "<p>Retrieve all information about all roles inserted</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>The array with all roles</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.role_label",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.role_name",
            "description": "<p>The english name of the role to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.role_name_fr",
            "description": "<p>The french name of the role to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.role_description",
            "description": "<p>The description of the role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the role raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the role raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "ROLE",
    "name": "GetRoleRoles",
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
    "group": "ROLE",
    "type": "GET",
    "url": "/role/users/:label",
    "title": "Get all users linked to a role",
    "description": "<p>Retrieve all users linked linked to a particular role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label given to the role (ID)</p>"
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
            "field": "role",
            "description": "<p>The role related to the next users</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The array with all users linked to the role</p>"
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
            "field": "users.user_nickname",
            "description": "<p>The nickname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.user_role",
            "description": "<p><em>JOIN TABLE</em> The association table between roles and users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_role.role_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_role.role_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_role.role_role",
            "description": "<p><em>JOIN TABLE</em> The foreign key to role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_role.createdAt",
            "description": "<p><em>JOIN TABLE</em> The creation date of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_role.updatedAt",
            "description": "<p><em>JOIN TABLE</em> The last date update of the raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "ROLE",
    "name": "GetRoleUsersLabel",
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
    "group": "ROLE",
    "type": "POST",
    "url": "/role/role/",
    "title": "Post a new role",
    "description": "<p>Create a new role in database</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_label",
            "description": "<p><code>REQUIRED</code> The label given to the role (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p><code>REQUIRED</code> The english name of the role to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_name_fr",
            "description": "<p><code>REQUIRED</code> The french name of the role to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_description",
            "description": "<p>The description of the role</p>"
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
            "field": "role_label",
            "description": "<p>The role label of the new role.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "ROLE",
    "name": "PostRoleRole",
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
    "group": "ROLE",
    "type": "PUT",
    "url": "/role/role/:label",
    "title": "Update a role",
    "description": "<p>Update a role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label of the role (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_label",
            "description": "<p>The label given to the role (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p>The english name of the role to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_name_fr",
            "description": "<p>The french name of the role to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role_description",
            "description": "<p>The description of the role</p>"
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
    "filename": "routes/role.js",
    "groupTitle": "ROLE",
    "name": "PutRoleRoleLabel",
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
    "group": "SHIFT_UNIT",
    "type": "GET",
    "url": "/shift_unit/all",
    "title": "Get all shift units",
    "description": "<p>Retrieve all information about all shift units inserted</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "shift_units",
            "description": "<p>The array with all teams</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shift_units.shift_unit_id",
            "description": "<p>The ID of shift unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shift_units.shift_unit_start",
            "description": "<p>The beginning of the shift unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shift_units.shift_unit_end",
            "description": "<p>The end of the shift unit</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the shift_unit raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the shift_unit raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/shift_unit.js",
    "groupTitle": "SHIFT_UNIT",
    "name": "GetShift_unitAll",
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
    "group": "SHIFT_UNIT",
    "type": "GET",
    "url": "/shift_unit/:id",
    "title": "Get all shift units",
    "description": "<p>Retrieve all information about one shift_unit in table</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shift_unit_id",
            "description": "<p>The ID of shift unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shift_unit_start",
            "description": "<p>The beginning of the shift unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shift_unit_end",
            "description": "<p>The end of the shift unit</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the shift_unit raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the shift_unit raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/shift_unit.js",
    "groupTitle": "SHIFT_UNIT",
    "name": "GetShift_unitId",
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
    "group": "SHIFT_UNIT",
    "type": "POST",
    "url": "/shift_unit/",
    "title": "Create a new shift unit",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "shift_unit_start",
            "description": "<p><code>REQUIRED</code> The begining of the shift_unit</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "shift_unit_end",
            "description": "<p><code>REQUIRED</code> The end of the shift_unit</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "shift_unit_point",
            "description": "<p><code>REQUIRED</code> The points of the unit_shift</p>"
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
            "field": "shift_unit_id",
            "description": "<p>The ID of the new shift_unit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/shift_unit.js",
    "groupTitle": "SHIFT_UNIT",
    "name": "PostShift_unit",
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
    "group": "SHIFT_UNIT",
    "type": "POST",
    "url": "/shift_unit/:id",
    "title": "Update the shift unit",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "shift_unit_start",
            "description": "<p><code>REQUIRED</code> The begining of the shift_unit</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "shift_unit_end",
            "description": "<p><code>REQUIRED</code> The end of the shift_unit</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "shift_unit_point",
            "description": "<p><code>REQUIRED</code> The points of the unit_shift</p>"
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
            "field": "shift_unit_id",
            "description": "<p>The ID of the new shift_unit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/shift_unit.js",
    "groupTitle": "SHIFT_UNIT",
    "name": "PostShift_unitId",
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
            "field": "users.user_nickname",
            "description": "<p>The nickname of the user</p>"
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
    "group": "TASK",
    "type": "DELETE",
    "url": "/task/comment/:id",
    "title": "Delete a comment",
    "description": "<p>Delete definitively the comment of the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the comment (ID)</p>"
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
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "DeleteTaskCommentId",
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
    "group": "TASK",
    "type": "DELETE",
    "url": "/task/task/:id",
    "title": "Delete the task",
    "description": "<p>Delete definitively the task, his instructions and his comments of the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task (ID)</p>"
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
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "DeleteTaskTaskId",
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
    "group": "TASK",
    "type": "GET",
    "url": "/task/comments/:id",
    "title": "Get all comments",
    "description": "<p>Retrieve all comment about the task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task whose the comments must be retrieved (ID)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>The array with all comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comments.task_comment_id",
            "description": "<p>The id of the comment raw (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comments.task_comment_owner",
            "description": "<p>The id of the user who has written the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.task_comment_content",
            "description": "<p>The comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.task_comment_date",
            "description": "<p>The date when the comment has been written</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comments.task_comment_task",
            "description": "<p>The id of the task that it is linked</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.createdAt",
            "description": "<p>The creation date of the comment raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.updatedAt",
            "description": "<p>The last date update of the comment raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "GetTaskCommentsId",
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
    "group": "TASK",
    "type": "GET",
    "url": "/task/instructions/:id",
    "title": "Get instructions",
    "description": "<p>Retrieve all information about a task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task whose the instruction must be retrieved (ID)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task_instrucions_id",
            "description": "<p>The id of the instruction task (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "Blob",
            "optional": false,
            "field": "task_instructions_instructions",
            "description": "<p>All formated instructions of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the task raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the task raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "GetTaskInstructionsId",
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
    "group": "TASK",
    "type": "GET",
    "url": "/task/task/:id",
    "title": "Get one task",
    "description": "<p>Retrieve all information about a task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task to retrieve (ID)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task_id",
            "description": "<p>The id of the task (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_label",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks_description",
            "description": "<p>The little description of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_team",
            "description": "<p>The team linked to the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_supervisor",
            "description": "<p>The supervisor email of the task in place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_master",
            "description": "<p>The master email of the task, the people to contact if a problem occurs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_group",
            "description": "<p>The ID group task that belong the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_location",
            "description": "<p>The ID location where the task take place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_instruction",
            "description": "<p>The ID of the instructions</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the task raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the task raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "GetTaskTaskId",
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
    "group": "TASK",
    "type": "GET",
    "url": "/task/tasks",
    "title": "Get all tasks",
    "description": "<p>Retrieve all information about all tasks inserted</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>The array with all tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tasks.task_id",
            "description": "<p>The id of the task (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_label",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_description",
            "description": "<p>The little description of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_team",
            "description": "<p>The team linked to the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_supervisor",
            "description": "<p>The supervisor email of the task in place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_master",
            "description": "<p>The master email of the task, the people to contact if a problem occurs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_group",
            "description": "<p>The ID group task that belong the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_location",
            "description": "<p>The ID location where the task take place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task_instruction",
            "description": "<p>The ID of the instructions</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the task raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the task raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "GetTaskTasks",
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
    "group": "TASK",
    "type": "POST",
    "url": "/task/instructions/:id",
    "title": "Add a comment",
    "description": "<p>Insert a comment about a task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task whose the instruction must be inserted (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "task_comment_owner",
            "description": "<p>The id of the user who has written the comment</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_comment_content",
            "description": "<p>The content of the comment</p>"
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
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "PostTaskInstructionsId",
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
    "group": "TASK",
    "type": "POST",
    "url": "/task/task/",
    "title": "Post a new task",
    "description": "<p>Create a new task in database</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_label",
            "description": "<p><code>REQUIRED</code> The title given to the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tasks_description",
            "description": "<p>The little description of the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_team",
            "description": "<p>The team linked to the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_supervisor",
            "description": "<p>The supervisor email of the task in place</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_master",
            "description": "<p><code>REQUIRED</code>  The master email of the task, the people to contact if a problem occurs</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_group",
            "description": "<p>The ID group task that belong the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_location",
            "description": "<p>The ID location where the task take place</p>"
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
            "field": "team_label",
            "description": "<p>The team label of the new team.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "PostTaskTask",
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
    "group": "TASK",
    "type": "PUT",
    "url": "/task/instructions/:id",
    "title": "Update instructions",
    "description": "<p>Insert or Update the instructions of a task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task whose the instruction must be inserted (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Blob",
            "optional": false,
            "field": "task_instructions_instructions",
            "description": "<p>All formated instructions of the task</p>"
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
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "PutTaskInstructionsId",
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
    "group": "TASK",
    "type": "PUT",
    "url": "/task/task/:id",
    "title": "Update a task",
    "description": "<p>Update a task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p><code>REQUIRED</code> The id of the task (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_label",
            "description": "<p>The title given to the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tasks_description",
            "description": "<p>The little description of the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_team",
            "description": "<p>The team linked to the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_supervisor",
            "description": "<p>The supervisor email of the task in place</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_master",
            "description": "<p>The master email of the task, the people to contact if a problem occurs</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_group",
            "description": "<p>The ID group task that belong the task</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_location",
            "description": "<p>The ID location where the task take place</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "task_instruction",
            "description": "<p>The ID of the instructions</p>"
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
    "filename": "routes/task.js",
    "groupTitle": "TASK",
    "name": "PutTaskTaskId",
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
    "group": "TEAM",
    "type": "DELETE",
    "url": "/team/team/:label",
    "title": "Delete the team",
    "description": "<p>Delete definitively the team of the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label of the team (ID)</p>"
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
    "filename": "routes/team.js",
    "groupTitle": "TEAM",
    "name": "DeleteTeamTeamLabel",
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
    "group": "TEAM",
    "type": "GET",
    "url": "/team/team/:label",
    "title": "Get one team",
    "description": "<p>Retrieve all information about a team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label given to the team (ID)</p>"
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
            "field": "team_label",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team_name",
            "description": "<p>The english name of the team to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team_name_fr",
            "description": "<p>The french name of the team to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team_description",
            "description": "<p>The description of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the team raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the team raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/team.js",
    "groupTitle": "TEAM",
    "name": "GetTeamTeamLabel",
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
    "group": "TEAM",
    "type": "GET",
    "url": "/team/teams",
    "title": "Get all teams",
    "description": "<p>Retrieve all information about all teams inserted</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "teams",
            "description": "<p>The array with all teams</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_label",
            "description": "<p>The mail of the user to retrieve (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_name",
            "description": "<p>The english name of the team to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_name_fr",
            "description": "<p>The french name of the team to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_description",
            "description": "<p>The description of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The creation date of the team raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The last date update of the team raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/team.js",
    "groupTitle": "TEAM",
    "name": "GetTeamTeams",
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
    "group": "TEAM",
    "type": "GET",
    "url": "/team/users/:label",
    "title": "Get all users linked to a team",
    "description": "<p>Retrieve all users linked linked to a particular team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label given to the team (ID)</p>"
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
            "field": "team",
            "description": "<p>The team related to the next users</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The array with all users linked to the team</p>"
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
            "field": "users.user_nickname",
            "description": "<p>The nickname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.user_team",
            "description": "<p><em>JOIN TABLE</em> The association table between teams and users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_team.team_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_team.team_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_team.team_team",
            "description": "<p><em>JOIN TABLE</em> The foreign key to team</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_team.createdAt",
            "description": "<p><em>JOIN TABLE</em> The creation date of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.user_team.updatedAt",
            "description": "<p><em>JOIN TABLE</em> The last date update of the raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/team.js",
    "groupTitle": "TEAM",
    "name": "GetTeamUsersLabel",
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
    "group": "TEAM",
    "type": "POST",
    "url": "/team/team/",
    "title": "Post a new team",
    "description": "<p>Create a new team in database</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_label",
            "description": "<p><code>REQUIRED</code> The label given to the team (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_name",
            "description": "<p><code>REQUIRED</code> The english name of the team to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_name_fr",
            "description": "<p><code>REQUIRED</code> The french name of the team to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_description",
            "description": "<p>The description of the team</p>"
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
            "field": "team_label",
            "description": "<p>The team label of the new team.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/team.js",
    "groupTitle": "TEAM",
    "name": "PostTeamTeam",
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
    "group": "TEAM",
    "type": "PUT",
    "url": "/team/team/:label",
    "title": "Update a team",
    "description": "<p>Update a team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p><code>REQUIRED</code> The label of the team (ID)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_label",
            "description": "<p>The label given to the team (ID)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_name",
            "description": "<p>The english name of the team to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_name_fr",
            "description": "<p>The french name of the team to display</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "team_description",
            "description": "<p>The description of the team</p>"
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
    "filename": "routes/team.js",
    "groupTitle": "TEAM",
    "name": "PutTeamTeamLabel",
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
    "url": "/user/avaibilities/:mail",
    "title": "Get all skills of an user",
    "description": "<p>Retrieve all teams about an users</p>",
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
            "field": "avaibilities",
            "description": "<p>The array with all teams of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "GetUserAvaibilitiesMail",
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
    "url": "/user/friends/:mail",
    "title": "Get all friends of an user",
    "description": "<p>Retrieve all friends about an users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p><code>REQUIRED</code> The mail of the user to retrieve his friends (ID)</p>"
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
            "description": "<p>The user related to the next friends</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "friends",
            "description": "<p>The array with all friend friends of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends.user_mail",
            "description": "<p>The mail of the friend</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends.user_name",
            "description": "<p>The name of the friend</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends.user_surname",
            "description": "<p>The surname of the friend</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends.user_nickname",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "friends.user_friend",
            "description": "<p><em>JOIN TABLE</em> The association table between teams and users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "friends.user_friend.user_friend_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends.user_friend.user_friend_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends.user_friend.user_friend_friend",
            "description": "<p><em>JOIN TABLE</em> The foreign key to team</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "friends.user_friend.createdAt",
            "description": "<p><em>JOIN TABLE</em> The creation date of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "friens.user_friend.updatedAt",
            "description": "<p><em>JOIN TABLE</em> The last date update of the raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "GetUserFriendsMail",
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
            "field": "skills.createdAt",
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
            "field": "skill.user_skill.user_skill_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.user_skill.user_skill_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.user_skill.user_skill_skill",
            "description": "<p><em>JOIN TABLE</em> The foreign key to skill</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "skills.user_skill.createdAt",
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
    "url": "/user/teams/:mail",
    "title": "Get all skills of an user",
    "description": "<p>Retrieve all teams about an users</p>",
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
            "field": "teams",
            "description": "<p>The array with all teams of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_label",
            "description": "<p>The label given to the user (ID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_name",
            "description": "<p>The english name of the team to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_name_fr",
            "description": "<p>The french name of the team to display</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.team_description",
            "description": "<p>The description of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "teams.createdAt",
            "description": "<p>The creation date of the team raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "teams.updatedAt",
            "description": "<p>The last date update of the team raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "teams.user_team",
            "description": "<p><em>JOIN TABLE</em> The association table between teams and users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "teams.user_team.user_team_id",
            "description": "<p><em>JOIN TABLE</em> The ID of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.user_team.user_team_user",
            "description": "<p><em>JOIN TABLE</em> The foreign key to user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.user_team.user_team_team",
            "description": "<p><em>JOIN TABLE</em> The foreign key to team</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "teams.user_team.createdAt",
            "description": "<p><em>JOIN TABLE</em> The creation date of the raw</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "teams.user_team.updatedAt",
            "description": "<p><em>JOIN TABLE</em> The last date update of the raw</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "USER",
    "name": "GetUserTeamsMail",
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
            "field": "users.user_nickname",
            "description": "<p>The nickname of the user</p>"
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
            "type": "Date",
            "optional": false,
            "field": "users.user_last_login",
            "description": "<p>The date of the last login user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.createdAt",
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
