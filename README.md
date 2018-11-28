# Planizi
## Simplify your event
That project arise from a end-of-study project from INSA Lyon named PILS (Innovative Lean Start-up Project)  
It was started to meet to expectations of several associations and organizations of the world of events.  
The final goal is to provide the solution to some associations of INSA (BDE, 24heures de l'INSA, ...) and afterwards to some external associations, and organization to assist them on their event.  
The solution try provide a way of gathering all people who have a role in the organization, and gather all tasks that must be allocated to people.  

## Organization
#### Overview
The project is divided in two parts :
- API side that will handle the requests, manage data about the users, the tasks...
- Client side that will build an application for a browser that use the API to get and send data.

#### API
The API is developped in **NodeJS** with *Express*.   
The database is a relational database **MySQL**. The ORM used is a node module named *Sequelize*.
Go to ``/api``.

#### Client
The Client is developped with **Angular 7**.
Go to ``/client``

## Start the project
To start the project you have to :
- lauch the API server with a functional database. Follow instructions in ``/api``. Theorically, just lauch ``npm start``.
After that, you will make request to the API at ``http://localhost:8080``.
- lauch the Client application. Follow instructions in ``/client``. Theoriccaly, just lauch ``ng serve``.
After that, you will use the application at ``http://localhost:4300``.