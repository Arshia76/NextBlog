import Image from 'next/image';
import Resource from '../public/Resource';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const Post = (props) => {
  const router = useRouter();
  return (
    <div className='flex flex-col w-full bg-white shadow-xl rounded-lg'>
      <div className='relative w-full h-[200px] md:h-[250px] mb-8'>
        <Image
          layout='fill'
          objectFit='cover'
          src={props.img}
          alt={props.title}
          className='rounded-t-lg'
        />
      </div>
      <div className='px-6 py-8'>
        <h2 className='text-3xl leading-normal text-justify font-[500] mb-6'>
          {props.title}
        </h2>
        <p className='text-2xl text-[#9c6969] mb-8 text-justify leading-normal'>
          {props.desc}
        </p>
        <div className='flex items-center'>
          <div className='relative flex items-center justify-center w-[50px] h-[50px] rounded-full'>
            <Image
              src={props.userImg}
              layout='fill'
              objectFit='cover'
              alt={props.userName}
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col mr-6 flex-1'>
            <span className='font-[500] mb-2 text-2xl'>{props.userName}</span>
            <span className='text-xl'>{props.date}</span>
          </div>
          <div className='ml-6 flex items-center justify-center bg-[#EFEFEF] rounded-full w-[40px] h-[40px]'>
            <Image
              src={Resource.Svg.SHARE}
              alt='share'
              height={15}
              width={15}
              className='cursor-pointer'
            />
          </div>
          <div className='flex items-center justify-center bg-[#EFEFEF] rounded-full w-[40px] h-[40px]'>
            <Image
              src={Resource.Svg.BOOKMARK}
              alt='bookmark'
              height={20}
              width={20}
              className='cursor-pointer'
            />
          </div>
        </div>
        <hr className='w-full h-1 mt-8 bg-sky-800' />
        <div className=' flex items-center justify-between mt-10'>
          <button
            onClick={() => router.push(`${Resource.Routes.POSTS}/1`)}
            className='py-2 px-7 text-2xl border border-solid border-indigo-900 rounded-md transition-all duration-500 ease-in-out 
        text-white bg-indigo-900 hover:bg-white hover:text-indigo-900'
          >
            جزئیات
          </button>
          <div className='flex items-center justify-between w-2/3'>
            <div className='flex items-center cursor-pointer '>
              <span className='text-xl ml-1'>300</span>
              <Image
                width={30}
                height={30}
                src={Resource.Svg.EYEOPEN}
                alt='views'
              />
            </div>
            <div className='flex items-center cursor-pointer'>
              <span className='text-xl ml-1'>300</span>
              <Image
                width={30}
                height={25}
                src={Resource.Svg.COMMENT}
                alt='likes'
              />
            </div>
            <div className='flex items-center cursor-pointer'>
              <span className='text-xl ml-1'>20</span>

              <Image
                width={30}
                height={25}
                src={Resource.Svg.COMMENT}
                alt='comments'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  userImg: PropTypes.string,
  userName: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
};

export default Post;
