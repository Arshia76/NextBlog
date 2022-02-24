import Image from 'next/image';
import Resource from '../../public/Resource';
import Post from '../../components/Post';

const ProfilePage = (props) => {
  return (
    <div className='flex flex-col py-8 px-16 mt-24'>
      <div className='shadow-2xl rounded-xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mb-20'>
        <div
          className='relative w-36 h-36 mx-auto rounded-full border-4 border-white 
        border-solid translate-y-[-45px]'
        >
          <Image
            src={props.userImg || Resource.Images.Person1}
            alt={props.username || 'ارشیا'}
            className='rounded-full'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='px-12 flex flex-col items-center mb-8'>
          <input
            className='p-4 focus:border-gray-200 text-xl border border-solid border-[#f5f5f5] bg-[#f5f5f5] text-black mb-4 w-full'
            type='text'
            placeholder='نام کاربری'
          />
          <input
            className='p-4 focus:border-gray-200 border border-solid border-[#f5f5f5] bg-[#f5f5f5] text-blacks text-xl w-full mb-4'
            type='email'
            placeholder='ایمیل'
          />
          <input
            className='p-4 mb-8 focus:border-gray-200 border border-solid border-[#f5f5f5] bg-[#f5f5f5] text-black text-xl w-full'
            type='password'
            placeholder='رمز عبور'
          />
          <button
            className='transition-all duration-300 ease-out border border-solid border-transparent hover:bg-white hover:text-gray-400 
          px-20 py-4 hover:border-gray-400 rounded-sm text-2xl bg-gray-400 text-white'
          >
            ویرایش
          </button>
        </div>
      </div>
      <div>
        <div className='flex items-center justify-center w-full mb-12'>
          <span
            style={{ borderBottom: '2px solid red' }}
            className='text-3xl ml-32 pb-4 cursor-pointer '
          >
            پست‌های من
          </span>
          <span
            style={{ borderBottom: '2px solid red' }}
            className='text-3xl cursor-pointer pb-4  '
          >
            پست‌های ذخیره شده
          </span>
        </div>
        <div className='md:px-16 grid gap-14 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3'>
          <Post
            userName='ارشیا'
            userImg={Resource.Images.Person2}
            desc=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.Image2}
            title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            date='1400/2/4'
          />
          <Post
            userName='ارشیا'
            userImg={Resource.Images.Person2}
            desc=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.Image2}
            title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            date='1400/2/4'
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
