import Image from 'next/image';
import Resource from '../public/Resource';
import PropTypes from 'prop-types';

const FavoritePost = (props) => {
  return (
    <div className='relative flex flex-col w-full h-[85vh] '>
      <div className='relative w-full h-full'>
        <Image
          layout='fill'
          objectFit='cover'
          src={props.img}
          alt={props.title}
        />
      </div>
      <div className='absolute bg-white w-3/4 sm:w-1/2 md:w-1/3 translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 md:left-1/3 p-8 shadow-xl rounded-lg'>
        <h2 className='text-4xl leading-normal text-justify font-[500] mb-6'>
          {props.title}
        </h2>
        <p className='text-2xl mb-8 text-justify leading-normal'>
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
          <div className=' flex items-center justify-center bg-[#EFEFEF] rounded-full w-[40px] h-[40px]'>
            <Image
              src={Resource.Svg.BOOKMARK}
              alt='bookmark'
              height={20}
              width={20}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FavoritePost.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  userImg: PropTypes.string,
  userName: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
};

export default FavoritePost;
