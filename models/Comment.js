import mongoose from 'mongoose';
const { Schema } = mongoose;

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'لطفا متن نظر را وارد نمایید'],
      maxlength: 250,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
