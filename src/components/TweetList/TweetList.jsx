import { useState, useEffect } from 'react';
import { fetchUsers } from '../../redux/users/users.operations';
import {
  getUsers,
  getIsLoading,
  getError,
} from '../../redux/users/user.selectors';

import { useSelector, useDispatch } from 'react-redux';

import toast from 'react-hot-toast';

import style from './TweetList.module.css';

import TweetCard from '../TweetCard/TweetCard';

const TweetList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  let users = useSelector(getUsers);
  console.log('--------------------------->', users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // if (error) {
  //   const errorNotify = () => toast.error(`'oops! can not load :('`);
  //   errorNotify();
  // }

  return (
    <ul>
      {!(users.length === undefined) &&
        users.map(user => <TweetCard key={user.id} user={user} />)}
    </ul>
  );
};

export default TweetList;
