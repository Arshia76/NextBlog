import Image from 'next/image';
import PropTypes from 'prop-types';
import Resource from '../public/Resource';

const LatestPost = (props) => {
  return (
    <div className='shadow-lg rounded-lg w-full flex flex-col sm:flex-row items-center mt-10'>
      <div className='relative w-full h-[250px]'>
        <Image
          layout='fill'
          objectFit='cover'
          className='rounded-t-lg md:rounded-r-lg md:rounded-tl-none'
          src={props.img}
          alt={props.title}
        />
      </div>
      <div className='md:mr-10 p-10 md:px-0 md:pl-10 md:py-0'>
        <div className='flex items-center'>
          <div className='flex items-center ml-6'>
            <Image
              width={20}
              height={25}
              src={Resource.Svg.TIME}
              alt='time-icon'
            />
            <span className='mr-2 text-xl'>{props.time}</span>
          </div>
          <div className='flex items-center'>
            <Image
              width={20}
              height={20}
              src={Resource.Svg.CATEGORY}
              alt='category-icon'
            />
            <span className='mr-2 text-xl'>{props.category}</span>
          </div>
        </div>
        <h2 className='font-medium leading-normal text-3xl my-8 text-justify'>
          {props.title}
        </h2>
        <p className='text-2xl md:mb-2 leading-normal text-[#9c6969] text-justify'>
          {props.description}
        </p>
      </div>
    </div>
  );
};

LatestPost.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  category: PropTypes.string,
};

export default LatestPost;
