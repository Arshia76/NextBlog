import mongoose from 'mongoose';
const { Schema } = mongoose;

const LikeSchema = new mongoose.Schema(
  {
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

module.exports = mongoose.models.Like || mongoose.model('Like', LikeSchema);
