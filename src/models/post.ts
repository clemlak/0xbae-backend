import * as mongoose from 'mongoose';

const PostSchema: mongoose.Schema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model('Post', PostSchema, 'posts', true);

export default Post;
