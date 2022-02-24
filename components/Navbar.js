import { useState } from 'react';
import Resource from '../public/Resource';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isAuthenticated] = useState(true);
  return (
    <nav className='mb-8 bg-white sticky top-0 z-50 shadow-lg'>
      <ul className='flex items-center w-full justify-evenly py-6'>
        <li className='w-full text-center'>
          <Link href={Resource.Routes.HOME} passHref>
            <Image
              src={
                'https://cdn2.iconfinder.com/data/icons/social-media-circle-6/1024/circle-4-128.png'
              }
              alt='logo'
              height={60}
              width={60}
              objectFit='cover'
              className='cursor-pointer'
            />
          </Link>
        </li>
        <li className='w-full'>
          <div className='flex items-center justify-center'>
            <input
              type='text'
              placeholder='جستجو'
              className='border border-solid w-full text-2xl  border-[#EBEBEB] text-black px-6 py-4'
            />
            <div
              className='cursor-pointer flex items-center justify-center border-2 border-solid border-transparent
             p-4 bg-[#FBE76D]'
            >
              <Image
                src={Resource.Svg.SEARCH2}
                alt='search-img'
                height={20}
                width={25}
              />
            </div>
          </div>
        </li>
        <li className='w-full'>
          {isAuthenticated ? (
            <div className='flex items-center justify-center'>
              <Link href={Resource.Routes.PROFILE} passHref>
                <div className='flex justify-center items-center ml-12 cursor-pointer'>
                  <Image
                    src={Resource.Svg.USER}
                    alt='user-panel'
                    width={20}
                    height={20}
                  />
                  <span className='text-2xl mr-2'>پنل کاربری</span>
                </div>
              </Link>
              <Link href={Resource.Routes.ADD} passHref>
                <div className='flex justify-center items-center cursor-pointer'>
                  <Image
                    src={Resource.Svg.PLUS}
                    alt='add-icon'
                    width={20}
                    height={20}
                  />
                  <span className='text-2xl mr-2'>افزودن پست</span>
                </div>
              </Link>
            </div>
          ) : (
            <Link href={Resource.Routes.AUTH} passHref>
              <div className='cursor-pointer flex items-center justify-center'>
                <Image
                  src={Resource.Svg.PASSWORD}
                  alt='auth-icon'
                  width={25}
                  height={25}
                />
                <span className='text-2xl mr-2'>ورود / ثبت‌نام</span>
              </div>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
