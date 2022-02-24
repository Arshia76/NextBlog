import Image from 'next/image';
import PropTypes from 'prop-types';
import Resource from '../../public/Resource';

const SinglePostPage = (props) => {
  return (
    <div className='relative w-full min-h-screen flex flex-col'>
      <div className='relative w-full h-[70vh] '>
        <Image
          objectFit='cover'
          layout='fill'
          src={props.img || Resource.Images.Image2}
          alt={props.title || 'هدر پست'}
        />
      </div>
      <div className='rounded-lg px-6 md:px-52 py-6 z-10 flex items-center flex-col justify-center bg-white w-full lg:w-3/4 absolute h-fit top-1/3 left-1/2 translate-x-[-50%] '>
        <div className='relative w-44 h-44 rounded-full border-solid border-white border-4 translate-y-[-65px]'>
          <Image
            layout='fill'
            objectFit='cover'
            className='rounded-full'
            src={props.userImg || Resource.Images.Person1}
            alt='user-img'
          />
        </div>
        <h2 className='leading-snug md:leading-normal text-4xl md:text-5xl mb-14 text-black text-center'>
          {props.title ||
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'}
        </h2>
        <p className='text-2xl leading-normal md:text-3xl md:leading-loose text-[#111] text-justify'>
          {props.desc ||
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
        </p>
        <div
          style={{ borderBottom: '2px solid red', borderTop: '2px solid red' }}
          className='flex items-center justify-evenly w-full py-16 my-10'
        >
          <button
            className='flex items-center border border-solid rounded-md
          bg-green-700 border-green-700 text-white px-6 py-4'
          >
            <Image
              width={20}
              height={20}
              src={Resource.Svg.PEN}
              alt='edit-post'
            />
            <span className='text-2xl mr-1'>ویرایش</span>
          </button>
          <button
            className='flex items-center border border-solid rounded-md
          bg-red-700 border-red-600 text-white px-6 py-4'
          >
            <Image
              width={20}
              height={20}
              src={Resource.Svg.TRASH_BIN}
              alt='delete-post'
            />
            <span className='text-2xl mr-1'> حذف</span>
          </button>
        </div>
        <div>
          <h4
            style={{ borderBottom: '2px solid black' }}
            className='text-5xl pb-4 w-fit my-16 text-center mx-auto'
          >
            نظرات
          </h4>
          <div className='mb-10 p-6 rounded-md shadow-[1px_1px_10px_-6px_rgba(0,0,0,0.4),-1px_-1px_10px_-6px_rgba(0,0,0,0.4)]'>
            <div className='flex items-center w-full'>
              <Image
                width={60}
                height={60}
                className='rounded-full'
                src={props.commentorImg || Resource.Images.Person2}
                alt={props.commentorName || 'ارشیا نظرلطفی'}
              />
              <span className='text-3xl flex-1 mr-4'>
                {props.commentorName || 'ارشیا نظرلطفی'}
              </span>
              <span className='text-2xl whitespace-nowrap'>
                {props.time || '12 ساعت قبل'}
              </span>
            </div>
            <p className='text-2xl md:translate-y-[-10px] md:pr-28 leading-loose text-justify'>
              {props.comment ||
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
            </p>
            <div className='flex items-center md:pr-28 mt-8'>
              <div className='flex items-center ml-6 cursor-pointer'>
                <Image
                  width={25}
                  height={25}
                  src={Resource.Svg.COMMENT}
                  alt='reply'
                />
                <span className='text-xl mr-2'>پاسخ دادن</span>
              </div>
              <div className='flex items-center ml-6 cursor-pointer'>
                <Image
                  width={25}
                  height={25}
                  src={Resource.Svg.HEART}
                  alt='like'
                />
                <span className='text-xl mr-2'>پسندیدن</span>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='mb-10 p-6 rounded-md shadow-[1px_1px_10px_-6px_rgba(0,0,0,0.4),-1px_-1px_10px_-6px_rgba(0,0,0,0.4)]'>
            <div className='flex items-center w-full'>
              <Image
                width={60}
                height={60}
                className='rounded-full'
                src={props.commentorImg || Resource.Images.Person2}
                alt={props.commentorName || 'ارشیا نظرلطفی'}
              />
              <span className='text-3xl flex-1 mr-4'>
                {props.commentorName || 'ارشیا نظرلطفی'}
              </span>
              <span className='text-2xl whitespace-nowrap'>
                {props.time || '12 ساعت قبل'}
              </span>
            </div>
            <p className='text-2xl md:translate-y-[-10px] md:pr-28 leading-loose text-justify'>
              {props.comment ||
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
            </p>
            <div className='flex items-center md:pr-28 mt-8'>
              <div className='flex items-center ml-6 cursor-pointer'>
                <Image
                  width={25}
                  height={25}
                  src={Resource.Svg.COMMENT}
                  alt='reply'
                />
                <span className='text-xl mr-2'>پاسخ دادن</span>
              </div>
              <div className='flex items-center ml-6 cursor-pointer'>
                <Image
                  width={25}
                  height={25}
                  src={Resource.Svg.HEART}
                  alt='like'
                />
                <span className='text-xl mr-2'>پسندیدن</span>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='mb-10 p-6 rounded-md shadow-[1px_1px_10px_-6px_rgba(0,0,0,0.4),-1px_-1px_10px_-6px_rgba(0,0,0,0.4)]'>
            <div className='flex items-center w-full'>
              <Image
                width={60}
                height={60}
                className='rounded-full'
                src={props.commentorImg || Resource.Images.Person2}
                alt={props.commentorName || 'ارشیا نظرلطفی'}
              />
              <span className='text-3xl flex-1 mr-4'>
                {props.commentorName || 'ارشیا نظرلطفی'}
              </span>
              <span className='text-2xl whitespace-nowrap'>
                {props.time || '12 ساعت قبل'}
              </span>
            </div>
            <p className='text-2xl md:translate-y-[-10px] md:pr-28 leading-loose text-justify'>
              {props.comment ||
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
            </p>
            <div className='flex items-center md:pr-28 mt-8'>
              <div className='flex items-center ml-6 cursor-pointer'>
                <Image
                  width={25}
                  height={25}
                  src={Resource.Svg.COMMENT}
                  alt='reply'
                />
                <span className='text-xl mr-2'>پاسخ دادن</span>
              </div>
              <div className='flex items-center ml-6 cursor-pointer'>
                <Image
                  width={25}
                  height={25}
                  src={Resource.Svg.HEART}
                  alt='like'
                />
                <span className='text-xl mr-2'>پسندیدن</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h4 className='text-5xl my-16 text-center'>نظرات</h4>
          <div className='p-6 flex items-start justify-between w-full'>
            <Image
              width={450}
              height={450}
              className='rounded-full'
              src={props.commentorImg || Resource.Images.Person2}
              alt={props.commentorName || 'ارشیا نظرلطفی'}
            />
            <div className='mr-4'>
              <span className='text-3xl '>
                {props.commentorName || 'ارشیا نظرلطفی'}
              </span>
              <p className='text-2xl mt-2 leading-loose text-justify'>
                {props.comment ||
                  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
              </p>
              <div className='flex items-center'>
                <div className='flex items-center ml-6 cursor-pointer'>
                  <Image
                    width={25}
                    height={25}
                    src={Resource.Svg.COMMENT}
                    alt='reply'
                  />
                  <span className='text-xl mr-2'>پاسخ دادن</span>
                </div>
                <div className='flex items-center ml-6 cursor-pointer'>
                  <Image
                    width={25}
                    height={25}
                    src={Resource.Svg.HEART}
                    alt='like'
                  />
                  <span className='text-xl mr-2'>پسندیدن</span>
                </div>
              </div>
            </div>
            <span className='text-2xl whitespace-nowrap'>
              {props.time || '12 ساعت قبل'}
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

SinglePostPage.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  userImg: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default SinglePostPage;
