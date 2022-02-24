import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'لطفا نام کاربری را وارد نمایید'],
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, 'لطفا ایمیل کاربر را وارد نمایید'],
    },
    password: {
      type: String,
      required: [true, 'لطفا رمز عبور کاربر را وارد نمایید'],
      min: 6,
    },
    img: {
      type: String,
    },
    posts: {
      count: {
        type: Number,
      },
      posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
      favoritePosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
