# Planizi
#### Simplify your event
That project arise from a end-of-study project from INSA Lyon named PILS (Innovative Lean Start-up Project)
It was started to meet to expectations of several associations and organizations of the world of events.
The final goal is to provide the solution to some associations of INSA (BDE, 24heures de l'INSA, ...) and afterwards to some external associations, and organization to assist them on their event.
The solution try provide a way of gathering all people who have a role in the organization, and gather all tasks that must be allocated to people.

## Installation
#### Overview
That project is developped with **NodeJS** and Express module.
The database used is **MySQL** with Sequelize module as ORM.
The front part will be developped by using **EJS** templating and **Bootstrap, JQuery** frameworks.

#### Set up your development environment
##### Dowload NodeJS and the project
- [ ] Dowload and open your IDE as IntelliJ or Webstorm (optionally)
- [ ] If not yet, dowload **NodeJS** and **npm**, then update your PATH variable. Make sure with the commands :
`node --version`
`npm --version`
- [ ] Clone the project on your workspace :
`git clone https://github.com/lcgiry/Planizi.git`

##### Dowload dependencies and frameworks
- [ ] As all dependencies and frameworks come from npm packages, you can install all by using the following command :
`npm install`

##### Provision the database
- [ ] Dowload MySQL Server (and optionally MySQL Workbench for the GUI).
- [ ] Import the latest database dump (.sql) available in ***./database_dump/*** directory.
  `mysql -p -u [user] [database] < planizi_database_dump_[date].sql`
  That will create and provision the database named *db_planizi*.
- [ ] Start MySQL Server. It will listen on port 3306.

#### Start the application
- Lauch the application server with the command : `npm start`
- Open your browser and go at http://localhost:8080/


## Project Architecture
#### File architecture

#### Server and routing : *Express* module

#### ORM and models : *Sequelize* module

#### Views : *EJS* templating

#### Other modules
##### Authentication with *Passport* module and OAuth2