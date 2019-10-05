import express from 'express';

const app: express.Application = express();

const port: number = 3000;

app.get('/', (_: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

app.listen(port);
