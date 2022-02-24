import USER from './Svg/user.svg';
import PASSWORD from './Svg/password.svg';
import PASSWORD2 from './Svg/password2.svg';
import EMAIL from './Svg/email.svg';
import CALENDAR from './Svg/calendar.svg';
import GENDER from './Svg/gender.svg';
import ATTACHMENT from './Svg/attachment.svg';
import PHONE from './Svg/phone.svg';
import USERFILLED from './Svg/filled/user-filled.svg';
import GLOBEFILLED from './Svg/filled/world.svg';
import ENVELOPEFILLED from './Svg/filled/envelope.svg';
import PHONEFILLED from './Svg/filled/phone.svg';
import BELLFILLED from './Svg/filled/bell.svg';
import SEARCH from './Svg/search.svg';
import SEARCH2 from './Svg/search2.svg';
import GROUPFILLED from './Svg/filled/group-filled.svg';
import HOMEFILLED from './Svg/filled/home-filled.svg';
import VIDEOFILLED from './Svg/filled/video-filled.svg';
import MESSAGEFILLED from './Svg/filled/message-filled.svg';
import CAMERAFILLED from './Svg/filled/camera-filled.svg';
import CALENDAR2 from './Svg/calendar-2.svg';
import CONTENT from './Svg/content.svg';
import SEND from './Svg/send.svg';
import EMOJI from './Svg/emoji.svg';
import ENVIRONMENT from './Images/environment.jpg';
import ENVIRONMENT1 from './Images/environment1.jpg';
import ENVIRONMENT2 from './Images/environment2.jpg';
import ENVIRONMENT3 from './Images/environment3.jpg';
import ENVIRONMENT4 from './Images/environment4.jpg';
import HEART from './Svg/heart.svg';
import COMMENT from './Svg/comment.svg';
import FORWARD from './Svg/forward.svg';
import EYEOPEN from './Svg/eye-open.svg';
import DOT from './Svg/dot.svg';
import PLUS from './Svg/plus.svg';
import MINIMIZE from './Svg/minimize.svg';
import MAXIMIZE from './Svg/maximize.svg';
import CROSS from './Svg/cross.svg';
import CROSSWHITE from './Svg/cross-white.svg';
import REGISTER from './Images/register.jpg';
import SHARE from './Svg/share.svg';
import BOOKMARKFILLED from './Svg/filled/bookmark-filled.svg';
import BOOKMARK from './Svg/bookmark.svg';
import Image1 from './Images/Image1.jpg';
import Image2 from './Images/Image2.jpg';
import Person1 from './Images/person1.jpg';
import Person2 from './Images/person2.jpg';
import TIME from './Svg/time.svg';
import CATEGORY from './Svg/category.svg';
import TRASH_BIN from './Svg/trash-bin.svg';
import PEN from './Svg/pen.svg';

class Resource {
  static Images = {
    REGISTER,
    ENVIRONMENT,
    ENVIRONMENT1,
    ENVIRONMENT2,
    ENVIRONMENT3,
    ENVIRONMENT4,
    Image1,
    Image2,
    Person1,
    Person2,
  };

  static Svg = {
    USER,
    PHONE,
    TIME,
    CATEGORY,
    PASSWORD,
    PASSWORD2,
    EMAIL,
    ATTACHMENT,
    GENDER,
    PEN,
    TRASH_BIN,
    CALENDAR,
    SEARCH,
    SEARCH2,
    CALENDAR2,
    SHARE,
    SEND,
    CONTENT,
    EMOJI,
    EYEOPEN,
    COMMENT,
    HEART,
    FORWARD,
    DOT,
    MAXIMIZE,
    MINIMIZE,
    PLUS,
    CROSS,
    CROSSWHITE,
    BOOKMARK,
  };

  static FilledSVG = {
    PHONEFILLED,
    USERFILLED,
    GLOBEFILLED,
    ENVELOPEFILLED,
    BELLFILLED,
    MESSAGEFILLED,
    HOMEFILLED,
    GROUPFILLED,
    VIDEOFILLED,
    CAMERAFILLED,
    BOOKMARKFILLED,
  };

  static Routes = {
    HOME: '/',
    AUTH: '/auth',
    PROFILE: '/profile',
    POSTS: '/posts',
    ADD: '/posts/add',
    EDIT: '/posts/edit',
  };
}

export default Resource;
