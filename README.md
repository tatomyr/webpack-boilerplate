# webpack-boilerplate

[![Known Vulnerabilities](https://snyk.io/test/github/tatomyr/webpack-boilerplate/badge.svg)](https://snyk.io/test/github/tatomyr/webpack-boilerplate)

## getting started

> To start phantom development server on `localhost:8080` type `npm run client`. It allows you hot reloading for the client.

> To start server on `localhost:8081` type `npm run server`.
If you want to serve your client files on this server, you have to build your client bundle with `npm run build` previously.

To simply start both client & server for development with one command, type `npm run start`.

## static code analyzing

Install `linter` and `linter-eslint` plugins (in Atom).

To analyze project vulnerabilities install Snyk globally: `npm i -g snyk`. Then you can test code with `snyk test`.

## deployment

If you want to deploy frontend & backend on separated hosts, you'll have to specify `CLIENT_URL` as a config var on backend host server.

### deployment to heroku as an integrated server mode

> To deploy on heroku (integrated server mode) you'll have to initialize a git repository in `dist/` folder (don't forget to create one `mkdir dist` if it doesn't exist & `cd dist` & `git init`). Then add a remote heroku repository with `heroku git:remote -a <heroku app repo>`.

Instead of all this above stuff you can use an automated script without changing root folder: `npm run heroku:init`.

Afterward, you could deploy with `npm run heroku:deploy`. This will trigger a production build of server & client bundles, adding a `package.json` to start the project on server and pushing code to remote heroku repo (what means actually deploy).

To watch the deployment server's logs type `npm run heroku:watch`.
