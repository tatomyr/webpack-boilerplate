# webpack-boilerplate

To start phantom development server on `localhost:8080` type `npm run serve`. It allows you hot reloading for the client.
To build server bundle & start server on `localhost:8081` type `npm run server`.
If you want to serve your client files on this server, you have to build your client bundle with `npm run dev` or `npm run build` previously.

# deployment

If you want to deploy frontend & backend on separated hosts, you'll have to specify `CLIENT_URL` as a config var on backend host server.

### deployment to heroku as an integrated server module

To deploy on heroku (integrated server mode) you'll have to initialize a git repository in `dist/` folder & add a remote heroku repository with `heroku git:remote -a <heroku app repo>`. Afterward, you could deploy with `npm run deploy:heroku`. This will trigger a production build of server & client bundles, adding a `package.json` to start the project on server and pushing code to remote heroku repo (what means actually deploy).
