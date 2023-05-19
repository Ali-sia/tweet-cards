import { useState, useEffect } from 'react';
import style from './TweetCard.module.css';

import logoGoIt from '../../assets/images/logoGoIt.svg';
import cardHeaderImg from '../../assets/images/cardHeaderImg.png';
import defaultCardAvatar from '../../assets/images/defaultCardAvatar.png';

const TweetCard = () => {
  return (
    <>
      <h1>tweet card</h1>
const TweetCard = ({ user }) => {
  const { id, name, tweets, followers, avatar, followed } = user;

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
            <img src={defaultCardAvatar} alt="user avatar"></img>
            <img
              src={avatar ? avatar : defaultCardAvatar}
              alt="user avatar"
            ></img>
          </div>
        </div>
        <div className={style.cardSeparator}></div>
        <p className={style.tweets}>
          <span> 777 </span> tweets
          <span> {tweets} </span> tweets
        </p>
        <p className={style.followers}>
          <span> 100,500 </span> Followers
          <span> {followers} </span>Followers
        </p>
        <button className={style.followBtn}>Follow</button>
        <button
          className={`${style.followBtn} ${followed && style.activeFollowBtn}`}
          onClick={() => {
          }}
        >
          {followed ? 'Following' : 'Follow'}
        </button>
      </div>
    </>
    </li>
  );
};

export default TweetCard;
