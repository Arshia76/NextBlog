import { login } from '../../../controllers/auth';
import dbConnect from '../../../utils/dbConnect';

export default async function apiHandler(req, res) {
  const { method, body } = req;

  await dbConnect();

  if (method === 'POST') {
    login(req, res, body);
  } else {
    return res.status(400).json({
      message: 'bad request method not allowed',
    });
  }
}
