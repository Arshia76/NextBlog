import { useState } from 'react';
import Resource from '../../public/Resource';
import Image from 'next/image';

const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className={'w-screen h-screen flex justify-center items-center'}>
      <Image
        objectFit={'cover'}
        layout={'fill'}
        src={Resource.Images.REGISTER}
        loading='eager'
        className={'brightness-50'}
      />
      <div
        className={
          'w-3/4 sm:w-1/2 lg:w-1/3 py-8 px-8 flex flex-col justify-center items-center z-50 rounded-2xl shadow-lg backdrop-blur-md '
        }
      >
        <h2 className={'text-white text-8xl mb-16 z-50'}>
          {login ? 'ورود' : 'ثبت‌نام'}
        </h2>
        {!login && (
          <div
            className={'w-full flex flex-col justify-center items-center mb-8'}
          >
            <label
              className={'text-2xl text-white mb-2 self-start'}
              htmlFor='fullName'
            >
              نام و نام‌خانوادگی
            </label>
            <input
              placeholder='نام و نام‌خانوادگی خود را وارد کنید'
              className={'input-auth placeholder-black'}
              id='fullName'
              type='text'
            />
          </div>
        )}
        <div
          className={'w-full flex flex-col justify-center items-center mb-8'}
        >
          <label
            className={'text-2xl text-white mb-2 self-start'}
            htmlFor='email'
          >
            ایمیل
          </label>
          <input
            id='email'
            placeholder='ایمیل خود را وارد نمایید'
            type='email'
            className={'input-auth placeholder-black'}
          />
        </div>
        <div
          className={'w-full flex flex-col justify-center items-center mb-12'}
        >
          <label
            className={'text-2xl text-white mb-2 self-start'}
            htmlFor='password'
          >
            رمز عبور
          </label>
          <input
            id='password'
            type='text'
            placeholder='رمز عبور خود را وارد نمایید'
            className={'input-auth placeholder-black'}
          />
        </div>
        <div className={'w-full'}>
          <button onClick={() => setLogin(!login)} className={'register-btn'}>
            {login ? 'ورود' : 'ثبت‌نام'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
