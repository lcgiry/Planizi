# Planizi
### Simplify your event
That project arise from a end-of-study project from INSA Lyon named PILS (Innovative Lean Start-up Project)  
It was started to meet to expectations of several associations and organizations of the world of events.  
The final goal is to provide the solution to some associations of INSA (BDE, 24heures de l'INSA, ...) and afterwards to some external associations, and organization to assist them on their event.  
The solution try provide a way of gathering all people who have a role in the organization, and gather all tasks that must be allocated to people.  

## Installation
### Overview
That project is developped with **NodeJS** and Express module.  
The database used is **MySQL** with Sequelize module as ORM.  
The front part will be developped by using **EJS** templating and **Bootstrap, JQuery** frameworks.  

### Set up your development environment
#### Dowload NodeJS and the project
- [ ] Dowload and open your IDE as IntelliJ or Webstorm (optionally)  
- [ ] If not yet, dowload **NodeJS** and **npm**, then update your PATH variable. Make sure with the commands :  
`node --version`
`npm --version`
- [ ] Clone the project on your workspace :  
`git clone https://github.com/lcgiry/Planizi.git`

#### Dowload dependencies and frameworks
- [ ] As all dependencies and frameworks come from npm packages, you can install all by using the following command :  
`npm install`

#### Provision the database
- [ ] Dowload MySQL Server (and optionally MySQL Workbench for the GUI).  
- [ ] Import the latest database dump (.sql) available in ***./database_dump/*** directory.  
  `mysql -p -u [user] [database] < planizi_database_dump_[date].sql`  
  That will create and provision the database named *db_planizi*.  
- [ ] Start MySQL Server. It will listen on port 3306.  

### Start the application
- Lauch the application server with the command :   
`npm start`  
- Open your browser and go at http://localhost:8080/


## Project Architecture & Technologies
### File architecture
 ````$xslt
|-- bin                                                         //Start file
|   |-- www.js
|
|-- config                                                      //All configuration files
|   |-- authentication
|       |-- config-authentication.json
|       |-- config-authentication.js
|   |-- database
|       |-- config-database.json
|       |-- config-database.js
|
|-- database-dump                                               //To store dump of the db recurrently
|   |-- planizi_database_dump_date.sql
|
|-- models                                                      //All models configuration to link database and code (Sequelize ORM code)
|   |-- user.js
|   |-- task.js
|   |-- ...
|   |-- ...
|   |-- team.js
|
|-- node_modules                                                //The default package that store all node modules
|   |-- ...
|
|-- public                                                      //The package that contain all front files as css, javascripts, images, medias... but not the html
|   |-- images
|   |   |-- ...
|   |-- javascripts
|   |   |-- ...
|   |-- stylesheets
|   |   |-- ...
|   |-- template-assets
|   |   |-- ...
|
|-- routes                                                      //Where all routes are defined to forward incoming API request
|   |-- index.js
|   |-- registration.js
|   |-- ...
|
|-- views                                                       //All view (EJS) that will generate html that will be sent to the client
|   |-- index.ejs
|   |-- dashboard.ejs
|   |-- ...
|
|-- package-lock.json
|-- package.json
|-- app.js                                                      //The first entrypoint when the application server in lauched (after bin/www)
|-- Readme.md
```` 
 
 
### Server and routing : *Express* module

### ORM and models : *Sequelize* module
#### Overview
Consult the official documentation that's very useful: http://docs.sequelizejs.com.  
Sequelize enable Database mapping. That's to say all table are mapped on the Node code thank's to object instantiate by Sequelize.
All accesses to the database will be performed with Sequelize.

#### Architecture and database link
The configuration link is very simple and set with database configuration in ``/config/database/config-database``.  
Each table of the database is defined as a model in ``/models/[table_name].js``.  
When you add a new table or a new field of an existing table of the database, you have to alter the corresponding models. Refer to an existing one to create a new model or a new field. Take care to have a good mapping between the model and the table, otherwise errors will occur.  
You can generate theses models by using ``sequelize-auto`` module with the command:  
``node ./node_modules/sequelize-auto/bin/sequelize-auto -h localhost -d db_planizi -u [user] -x [password]
``

#### Make queries
Refer to documentation: http://docs.sequelizejs.com/manual/tutorial/models-usage.html and http://docs.sequelizejs.com/manual/tutorial/querying.html.  
Note that Sequelize uses promises that return an instance of an object defined by the appropriate model (if no error). For example :
````javascript
UserModel.findAll({where: {id: userId}})                                //You can make some types of query (findAll, findOne, findAndCount, ... with some clauses) 
    .then(userResult => {                                               //userResult is an instance of the object defined in /models/UserModel.js
    	console.log('user found : '+ userResult.name);
    })
    .catch(err =>{
    	console.log('error : '+err);
    });
```` 

#### Object instance and inserts
You can create an object instance defined in /models/ to prepare an entry that could be insert in the database.
````javascript
const userInstance = UserModel.build({
        id: userId
        name: userName,
        surname: userSurname
    });

console.log(userInstance.surname);

userInstance.save()                                 //To insert in database
    .then( ()=>{} )
    .catch( err=>{} );
```` 

### Views : *EJS* templating
####  Overview
All view and pages that will be sent to the client are.ejs files. EJS provide a way to generate .html files from .ejs file. Thanks to that you can make loops, tests and other program instructions in your html to simplify your rendering.
Note that you can just write classical html, css and javascript in .ejs file without problem.

#### Back side
Read EJS documentation if necessary. It's easy and not complicated.  
To set the configuration in your application :
```javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
````
To send a view to your client, you have to make in your controller/router :
````javascript
res.render('your_view', { firtVariableToSend: 'value1', secondVariableToSend: ['value2', 'value3'] });
````

#### Front side
Example of front code in a .ejs view file :
```html
<html>
<body>
    <div class="title">
        <%= firstVariableToSend %>
        
        <% secondVariableToSend.forEach(function(val) { %>
            <li><%= val %></li>
        <% }); %>
    </div>
</body>
</html>
````

### Other modules
#### Authentication with *Passport* module and OAuth2