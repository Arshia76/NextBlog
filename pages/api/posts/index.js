import dbConnect from '../../../utils/dbConnect';
import { getPosts, createPost } from '../../../controllers/posts';

export default async function apiHandler(req, res) {
  const { method, query, body } = req;

  await dbConnect();

  if (method === 'GET') {
    if (query) {
      getPosts(res, query);
    } else {
      getPosts();
    }
  } else if (method === 'POST') {
    createPost(req, res, body);
  } else {
    res.status(400).json({
      message: 'bad request method not allowed',
    });
  }
}
