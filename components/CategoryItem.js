import Image from 'next/image';
import PropTypes from 'prop-types';

const CategoryItem = (props) => {
  return (
    <div className='cursor-pointer flex flex-col items-center justify-center mb-6'>
      <Image
        width={60}
        height={60}
        className='rounded-full'
        src={props.img}
        alt={props.category}
      />
      <span className='mt-4 text-xl'>{props.category}</span>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.string,
  img: PropTypes.string,
};

export default CategoryItem;
