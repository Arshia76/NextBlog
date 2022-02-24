import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'لطفا عنوان پست را وارد نمایید'],
      maxlength: 30,
    },
    description: {
      type: String,
      required: [true, 'لطفا متن پست را وارد نمایید'],
      maxlength: 300,
    },
    img: {
      type: String,
      required: [true, 'لطفا عکس پست را وارد نمایید'],
    },
    comments: {
      count: {
        type: Number,
        default: 0,
      },
      comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
    },
    likes: {
      count: {
        type: Number,
        default: 0,
      },
      likes: { type: [Schema.Types.ObjectId], ref: 'Like' },
    },
    views: {
      count: {
        type: Number,
        default: 0,
      },
      likes: { type: [Schema.Types.ObjectId], ref: 'Seen' },
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    kind: {
      type: String,
      default: 'normal',
      enum: ['best', 'latest', 'normal'],
    },

    user: {
      type: Schema.Types.ObjectId,
      required: ['User', 'لطفا کاربر پست را مشخص کنید'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
