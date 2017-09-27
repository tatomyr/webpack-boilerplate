import path from 'path'
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('SERVER: GET=/');

});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.info(`

    SERVER: LISTEN ON PORT ${port}

  `);
})
