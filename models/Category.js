import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'لطفا نام دسته‌بندی را وارد نمایید'],
      maxlength: 20,
    },
    img: {
      type: String,
      required: [true, 'لطفا عکس دسته‌بندی را وارد نمایید'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Category || mongoose.model('Category', CategorySchema);
