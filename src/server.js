import express from 'express';

const app = express();

// CORS resolutions
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL || 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Provides a static server in case of deploying on a same host
app.use(express.static('public'));

console.log(__dirname);

// REST api routes
app.get('/api', (req, res) => {
  console.log('/api');
  res.end(`current time: ${new Date()}`);
});

// Starting server
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`
_________________________________________
|                                       |
|    SERVER: LISTEN ON PORT ${port}        |
|_______________________________________|

client url: ${process.env.CLIENT_URL}

  `);
});
