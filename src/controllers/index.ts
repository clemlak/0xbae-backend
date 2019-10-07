import {
  Request,
  Response,
} from 'express';
import Post from '../models/post';

const allPosts = (_: Request, res: Response) => {
  Post.find((err: any, posts: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(posts);
    }
  });
};

const addPost = (req: Request, res: Response) => {
  const post = new Post(req.body);

  post.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(post);
    }
  });
};

export {
  allPosts,
  addPost,
};
