import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ViewSchema = new mongoose.Schema(
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

module.exports = mongoose.models.View || mongoose.model('View', ViewSchema);
