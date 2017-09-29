import path from 'path'
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// app.get('/', (req, res, next) => {
//   console.log('SERVER: GET=/');
//   res.send('hello')
// });

app.get('/api', (req, res) => {
  console.log('/api');
  res.end('current time: ' + new Date());
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`

    SERVER: LISTEN ON PORT ${port}

  `);
});
