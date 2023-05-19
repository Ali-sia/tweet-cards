import { useState, useEffect } from 'react';
import {
  subscribeUser,
  unsubscribeUser,
} from '../../redux/users/users.operations';
import {
  getIsLoading,
  getError,
  getUsers,
} from '../../redux/users/user.selectors';

import { useSelector, useDispatch } from 'react-redux';

import style from './TweetCard.module.css';

import logoGoIt from '../../assets/images/logoGoIt.svg';
import cardHeaderImg from '../../assets/images/cardHeaderImg.png';
import defaultCardAvatar from '../../assets/images/defaultCardAvatar.png';

const TweetCard = ({ user }) => {
  const { id, name, tweets, followers, avatar, followed } = user;

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const [isFollowed, setIsFollowed] = useState(followed);

  const onFollowClick = () => {
    let newUser;

    if (followed) {
      newUser = {
        id,
        name,
        tweets,
        followers: followers - 1,
        avatar,
        followed: !followed,
      };
      return dispatch(unsubscribeUser(newUser));
    }
    newUser = {
      id,
      name,
      tweets,
      followers: followers + 1,
      avatar,
      followed: !followed,
    };

    return dispatch(subscribeUser(newUser));
  };

  return (
    <li>
      <div className={style.tweetCard}>
        <div className={style.logo}>
          <img src={logoGoIt} alt="logo"></img>
        </div>
        <div className={style.headerImg}>
          <img src={cardHeaderImg} alt="logo"></img>
        </div>
        <div className={style.avatarBorder}>
          <div className={style.avatar}>
            <img
              src={avatar ? avatar : defaultCardAvatar}
              alt="user avatar"
            ></img>
          </div>
        </div>
        <div className={style.cardSeparator}></div>
        <p className={style.tweets}>
          <span> {tweets} </span> tweets
        </p>
        <p className={style.followers}>
          <span> {followers} </span>Followers
        </p>
        <button
          className={`${style.followBtn} ${followed && style.activeFollowBtn}`}
          onClick={() => {
            onFollowClick();
          }}
        >
          {followed ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};

export default TweetCard;
