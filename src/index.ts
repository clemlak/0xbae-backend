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

initMongoose(`${process.env.MONGODB}`);

/*
const posts = [
  {
    src: 'https://preview.redd.it/9inzl7fl03q31.jpg?width=864&auto=webp&s=36a7d23bbc53dfde03f16a93d8f2213cf95bcd08',
    model: 'Nedji',
    address: '0x92Cb2E864aefabf0c319aee79464e8aae70c95dD',
  },
  {
    src: 'https://preview.redd.it/0t6fso9u89q31.jpg?width=576&auto=webp&s=05b386bfa69d8f94bb550e5882b19f03515ac5be',
    model: 'Natsu',
    address: '0x8e966e75dAB5FA5A22ea3FF1F6032851cB22C30D',
  },
  {
    src: 'https://preview.redd.it/n29sz59215q31.jpg?width=576&auto=webp&s=0d1a8d6135f7a70419438263d2ceffa181d8ef19',
    model: 'Loona',
    address: '0x8e966e75dAB5FA5A22ea3FF1F6032851cB22C30D',
  },
  {
    src: 'https://i.redd.it/ysii047mf8q31.jpg',
    model: 'Tokyo',
    address: '0x8e966e75dAB5FA5A22ea3FF1F6032851cB22C30D',
  },
];
*/

app.get('/', PostController.allPosts);

app.get('/add', PostController.allPosts);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
