import PostModel from '../../models/Post';
import initMiddleware from '../../lib/init-middleware';
import validateMiddleware from '../../lib/validate-middleware';
import { check, validationResult } from 'express-validator';

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check('title')
        .not()
        .isEmpty()
        .withMessage('لطفا عنوان پست را وارد نمایید.')
        .isLength({ max: 30 })
        .withMessage('عنوان نمی‌تواند بیشتر از 30 کاراکتر باشد.'),
      check('description')
        .not()
        .isEmpty()
        .withMessage('لطفا متن پست را وارد نمایید.')
        .isLength({ max: 300 })
        .withMessage('متن پست نمی‌تواند بیشتر از 300 کاراکتر باشد.'),
      check('img')
        .not()
        .isEmpty()
        .withMessage('لطفا عکس پست پست را وارد کنید.'),
    ],
    validationResult
  )
);

export const getPosts = async (res, query) => {
  if (query) {
    try {
      const response = await PostModel.find({ kind: query });
      const data = await response.json();
      res.status(200).json({
        message: 'عملیات موفق',
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'خطا در بازیابی پست‌ها.',
        error,
      });
    }
  } else {
    try {
      const response = await PostModel.find();
      const data = await response.json();
      res.status(200).json({
        message: 'عملیات موفق',
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'خطا در بازیابی پست‌ها.',
        error,
      });
    }
  }
};

export const createPost = async (req, res, body) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const data = {};
  } catch (error) {
    return res.status(500).json({
      message: 'ایجاد پست با خطا مواجه شد.',
      error,
    });
  }
};
