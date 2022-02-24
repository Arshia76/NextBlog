import Post from '../components/Post';
import FavoritePost from '../components/FavoritePost';
import Resource from '../public/Resource';
import LatestPost from '../components/LatestPost';
import CategoryItem from '../components/CategoryItem';
import Subscription from '../components/Subscription';

const HomePage = () => {
  return (
    <div className=' w-full overflow-hidden'>
      <h2 className='text-4xl md:text-6xl text-center mt-8 mb-8 font-medium'>
        برترین پست
      </h2>
      <div className='w-full'>
        <FavoritePost
          userName='ارشیا'
          userImg={Resource.Images.Person1}
          desc=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
          img={Resource.Images.Image1}
          title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
          date='1400/2/4'
        />
      </div>
      <div>
        <div className='mt-32 px-10 md:px-20 flex items-center justify-between'>
          <h2 className='text-4xl md:text-6xl font-medium '>پست‌ها</h2>
          <button className='see-all-btn'>مشاهده همه</button>
        </div>
        <hr
          style={{ borderBottom: '2px solid black' }}
          className='w-[95%] mx-auto mt-8 mb-20'
        />
        <div className='px-10 md:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-14'>
          <Post
            userName='ارشیا'
            userImg={Resource.Images.Person1}
            desc=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.Image1}
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
          <Post
            userName='ارشیا'
            userImg={Resource.Images.Person1}
            desc=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.ENVIRONMENT}
            title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            date='1400/2/4'
          />
        </div>
      </div>
      <div className='mt-56 px-10 md:px-20 pb-6 flex items-center justify-between'>
        <h2 className='text-4xl md:text-6xl font-medium '>پست‌های اخیر</h2>
        <button className='see-all-btn'>مشاهده همه</button>
      </div>
      <hr
        style={{ borderBottom: '2px solid black' }}
        className='w-[95%] mx-auto mt-4 mb-20'
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 px-10 md:px-20 mb-20'>
        <div className='md:col-span-2'>
          <LatestPost
            description=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.ENVIRONMENT4}
            title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            time='3 ساعت پیش'
            category='تفریح'
          />
          <LatestPost
            description=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.ENVIRONMENT4}
            title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            time='3 ساعت پیش'
            category='تفریح'
          />
          <LatestPost
            description=' شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در '
            img={Resource.Images.ENVIRONMENT4}
            title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            time='3 ساعت پیش'
            category='تفریح'
          />
        </div>
        <div className='mt-10'>
          <h2 className='text-3xl mb-8 text-center'>دسته‌بندی</h2>
          <div className='grid grid-cols-3'>
            <CategoryItem img={Resource.Images.ENVIRONMENT1} category='دسته1' />
            <CategoryItem img={Resource.Images.ENVIRONMENT2} category='دسته2' />
            <CategoryItem img={Resource.Images.ENVIRONMENT3} category='دسته3' />
            <CategoryItem img={Resource.Images.ENVIRONMENT4} category='دسته4' />
            <CategoryItem img={Resource.Images.ENVIRONMENT1} category='دسته5' />
            <CategoryItem img={Resource.Images.ENVIRONMENT1} category='دسته6' />
          </div>
          <Subscription />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
