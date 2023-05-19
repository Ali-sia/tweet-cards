import { useState, useEffect } from 'react';
import { fetchUsers } from '../../redux/users/users.operations';
import { getUsers } from '../../redux/users/user.selectors';

import { useSelector, useDispatch } from 'react-redux';

import style from './TweetList.module.css';

import TweetCard from '../TweetCard/TweetCard';

const TweetList = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul className={style.tweetList}>
      {!(users.length === undefined) &&
        users.map(user => <TweetCard key={user.id} user={user} />)}
    </ul>
  );
};

export default TweetList;
