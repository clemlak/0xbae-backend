import express from 'express';
import cors from 'cors';
import bodyParse from 'body-parser';
import dotenv from 'dotenv';

import {
  initMongoose,
} from './utils';

import * as PostController from './controllers/index';

dotenv.config();

const app: express.Application = express();
const port: number = 3001;

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
  extended: true,
}));

initMongoose(`${process.env.mongodb}`);

app.get('/', PostController.allPosts);

app.post('/add', PostController.addPost);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
