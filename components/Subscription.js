import Image from 'next/image';
import Resource from '../public/Resource';

const Subscription = () => {
  return (
    <div className='bg-[#F7F7F7] flex flex-col items-center mt-10 py-16 px-10 md:px-28'>
      <h2 className='leading-normal text-4xl text-center mb-8'>
        هیچ پستی را از دست ندهید
      </h2>
      <p className='leading-normal text-2xl text-center mb-12 text-[#A8A8A8]'>
        به صورت رایگان ثبت‌نام کرده و از آخرین اخبار باخبر شوید.
      </p>
      <div className='bg-white border border-transparent border-solid focus-within:border-gray-400 mb-6 flex items-center p-6 justify-around w-full'>
        <input
          className='text-2xl w-full px-4'
          type='email'
          placeholder='ایمیل *'
        />
        <Image width={20} height={20} src={Resource.Svg.EMAIL} alt='email' />
      </div>
      <button
        className='w-full p-6 bg-[#1C1C1C] text-white text-3xl
      hover:opacity-80 duration-500 ease-in-out transition-all'
      >
        مشترک شوید
      </button>
    </div>
  );
};

export default Subscription;
