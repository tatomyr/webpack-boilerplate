# webpack-boilerplate

[![Known Vulnerabilities](https://snyk.io/test/github/tatomyr/webpack-boilerplate/badge.svg)](https://snyk.io/test/github/tatomyr/webpack-boilerplate)

## getting started

To start phantom development server on `localhost:8080` type `npm run serve`. It allows you hot reloading for the client.
To build server bundle & start server on `localhost:8081` type `npm run server`.
If you want to serve your client files on this server, you have to build your client bundle with `npm run dev` or `npm run build` previously.
To simply start both development & backend servers with one command type `npm run start`.

## linting

Install `linter` and `linter-eslint` plugins (in Atom).

## deployment

If you want to deploy frontend & backend on separated hosts, you'll have to specify `CLIENT_URL` as a config var on backend host server.

### deployment to heroku as an integrated server module

To deploy on heroku (integrated server mode) you'll have to initialize a git repository in `dist/` folder (don't forget to create one `mkdir dist` if it doesn't exist & `cd dist` & `git init`). Then add a remote heroku repository with `heroku git:remote -a <heroku app repo>`.
Instead of all this above stuff you can use an automated script without changing root folder: `npm run heroku:init`.
Afterward, you could deploy with `npm run deploy:heroku`. This will trigger a production build of server & client bundles, adding a `package.json` to start the project on server and pushing code to remote heroku repo (what means actually deploy).
