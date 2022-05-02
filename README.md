
<div align="center" width="100%">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</div>

<h1 align="center">Threads</h1>

<div align="center" width="100%">
    <img src="src/images/readme/iron-motorcycles.png">
</div>

<h4 align="center">A System Design creation and a recreation of a existing API.</h4>

## Features
An entire front-end built by a fantastic team of developers. The meat of this repository is the restructuring of the back-end to be able to create queries to the database in a time efficient manner while also being able to handle a large load of requests from many clients. What we can see included in this repository is some schemas for Postgresql in order to have tables to store seeded data. As well as scripts made to query said data. And also RESTful API practices.

## Motivation and Story
After using the previous api which had query times of 1000ms+ per request it was clear that long term it was not a viable solution. So I built upon the existing architecture to refactor it in a way that would lower the query times substantially. I taught myself new ways to optimize queries and some RESTful practices to add to my coding arsenal. And used my skills to create a System design that would allow this to be possible by creating schemas in Postgresql and playing around with the design visually in external programs such as excalidraw. I also used json functions in postgres and table manipulation to lower query times.

The end result was an API I created with average query speeds of ~10ms - 15ms per query at all endpoints.

## Code Styles
This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Tech Stack
**Built with**
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Postgresql](https://www.postgresql.org/)
- [AWS](https://aws.amazon.com/)

## Repository Installation (ssh)
`$ git clone git@github.com:ec-rilo/FEC-Web-App.git`

Once in the repository make sure to install the required packages.

`$ npm install`

Some global credentials are also needed, so make sure to create a .env file.

`$ touch .env`

Within the .env file the following is needed: Github API key, postgres user, postgres user's password.

```env
GIT_TOKEN=<Github Token>
pg_user=<Postgres User with appropriate privileges>
pg_pass=<The Postgres User Password>
```

## Tests
All tests are run using Jest.

To install Jest please follow the [Getting Started Page](https://jestjs.io/docs/getting-started) on the
Jest website.

In order to run tests, run the following command within terminal.

`$ npm run test`

## Credits
I'd like to thank the team I worked with on this project, Daniel Esquivel-Reynoso and Danny Wong. Both have helped me with all questions I had throughout the lifespan of this project.


<p align="center">Project extended by <a href="https://github.com/ec-rilo">Edgar Carrillo</a></p>
