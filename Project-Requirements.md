# Project Requirements

This document outlines the base requirements for Project 2.

### Requirements

Your project must:

* Use a Node and Express Web Server;

* Be backed by a MySQL Database an ORM (not necessarily Sequelize);

* Have both GET and POST routes for retrieving and adding new data;

* Be deployed using Heroku (with Data);

* Utilize at least one new library, package, or technology that we haven’t discussed;

* Have a polished frontend / UI;

* Meet good quality coding standards (indentation, scoping, naming).

* Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../project-resources/Protecting-API-Keys-in-Node.md)

////
user login
user sign up
start: -> Play
        IB: create/delete
        view?
schema:
    location
     -monsters: TABLE
     -encounters: TABLE
    monster
     -stats
    character
     -stats
    npc
     -events
     -stats
    event
     -instance
    encounters
     -instance
    shops
     -npc
     -inventory
    achievment
     -trigger
     -reward

