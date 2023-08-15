import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: {type: String},
  likes: {type: Number},
  liked: {type: Boolean},
  image: {type: String},
  username: { type: String, default: 'Nasa'},
  handle: { type: String, default: '@nasa'},
  title: {type: String},
  dislikes: {type: Number, default:0},
  replies: {type: Number, default:0},
  time: { type: String, default:'5h'},
  retuits: {type: Number, default: 0}
}, {collection: 'tuits'});
export default schema;

