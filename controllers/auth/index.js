import UserModel from '../../models/User';
import initMiddleware from '../../lib/init-middleware';
import validateMiddleware from '../../lib/validate-middleware';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check('username')
        .not()
        .isEmpty()
        .withMessage('لطفا نام کاربری را وارد نمایید.'),
      check('email')
        .not()
        .isEmpty()
        .withMessage('لطفا ایمیل کاربر را وارد نمایید.')
        .isEmail()
        .withMessage('لطفا ایمیل معتبری وارد نمایید.'),
      check('password')
        .not()
        .isEmpty()
        .withMessage('رمز عبور کاربر را وارد نمایید.')
        .isLength({
          min: 6,
        })
        .withMessage('کلمه عبور باید حداقل 6 کلمه باشد.'),
    ],
    validationResult
  )
);

export const login = async (req, res, body) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { email, password } = body;

    let user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: 'ایمیل یا رمز عبر اشتباه است.',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({
        msg: 'کاربری با این مشخصات وجود ندارد.',
      });

    await user.save();

    jwt.sign(
      { user },
      process.env.jwtSecret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) {
          throw err;
        }

        res.setHeader('token', token, {
          httpOnly: true,
          sameSite: 'strict',
          path: '/',
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 2, //2 days
        });
        res.json({
          message: 'success',
          id: user._id,
          username: user.username,
          image: user.image,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: 'ورود کاربر با خطا مواجه شد.',
      error,
    });
  }
};

export const regiser = async (req, res, body) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { username, email, img } = body;

    let user = await UserModel.findOne({
      email,
    });

    if (user) {
      return res.status(400).json({
        message: 'کاربری با این ایمیل ثبت‌نام کرده است.',
      });
    }

    let exsistingUserName = await UserModel.findOne({ username });

    if (exsistingUserName) {
      return res.status(400).json({
        message: 'کاربری با این نام کاربری ثبت‌نام کرده است.',
      });
    }

    user = new UserModel({
      username,
      email,
      password,
      img: '',
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    jwt.sign(
      { user },
      process.env.jwtSecret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) {
          throw err;
        }

        res.json({
          message: 'success',
          id: user._id,
          username,
          token,
          image: user.image,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: 'ثبت نام کاربر با خطا مواجه شد.',
      error,
    });
  }
};
