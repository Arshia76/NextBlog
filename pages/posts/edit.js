import Image from 'next/image';
import { useState } from 'react';
import Resource from '../../public/Resource';

const EditPostPage = () => {
  const [img, setImage] = useState();
  const [previewImage, setPreviewImages] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const fileChange = (e) => {
    console.log('called');
    const file = e.target.files[0];
    setPreviewImages(URL.createObjectURL(file));
    setImage(file);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const edit = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      img,
    };
    console.log(data);
  };

  return (
    <div className='flex items-center justify-center w-full min-h-[80vh]'>
      <div className='border border-solid border-gray-200 w-full md:w-1/2 max-w-6xl mx-auto shadow-xl my-8 py-12 h-fit px-24 flex flex-col '>
        <h2 className='text-5xl mb-12 text-center'>ویرایش پست</h2>
        <input
          onChange={titleChange}
          value={title}
          type='text'
          placeholder='عنوان پست'
          className='focus:border-gray-300 rounded-md p-4 text-xl w-full mb-8 bg-green-100 border border-solid border-green-100'
        />
        <textarea
          onChange={descriptionChange}
          value={description}
          type='text'
          rows={8}
          placeholder='متن پست'
          className='focus:border-gray-300 rounded-md p-4 text-xl mb-8 w-full resize-none  bg-green-100 border border-solid border-green-100'
        />

        <div className='w-full flex items-start justify-start mb-10'>
          <label
            htmlFor='upload-photo'
            className='cursor-pointer w-64 '
            onChange={fileChange}
          >
            <span className='py-2 text-[#AFA6AF] px-4 text-xl w-64 rounded-md bg-green-100 border border-solid border-green-100'>
              عکس پست
            </span>
          </label>
          <input
            type='file'
            name='photo'
            onChange={fileChange}
            id='upload-photo'
            className='hidden z-[-1]'
          />
          <div
            className={`${
              previewImage ? 'block' : 'hidden'
            }  relative w-96 h-96 mr-auto`}
          >
            <Image
              objectFit='fill'
              layout='fill'
              src={previewImage ? previewImage : Resource.Images.Image1}
              alt='image-preview'
              className='rounded-md'
            />
          </div>
        </div>
        <button
          onClick={edit}
          className='hover:bg-white hover:text-gray-400 border border-solid
       border-gratext-gray-400 bg-gratext-gray-400 rounded-md text-white text-2xl py-4 px-6
       transition-all duration-300 ease-out w-64 mx-auto'
        >
          ویرایش
        </button>
      </div>
    </div>
  );
};

export default EditPostPage;
