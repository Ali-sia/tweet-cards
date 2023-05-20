import { useState, useEffect } from 'react';
import { fetchUsers } from '../../redux/users/users.operations';
import { getUsers } from '../../redux/users/user.selectors';

import { useSelector, useDispatch } from 'react-redux';

import style from './TweetList.module.css';

import TweetCard from '../TweetCard/TweetCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Filter from '../Filter/Filter';

import { selectVisibleUsers } from '../../redux/users/user.selectors';

const TweetList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(getUsers);
  const filteredUsers = useSelector(selectVisibleUsers);
  const usersPerPage = 3;
  const [visibleItems, setVisibleItems] = useState(usersPerPage);

  const isUsers = !(users.length === undefined);
  if (!isUsers) {
    return null;
  }

  const visibleUsers = filteredUsers.slice(0, visibleItems);
  const isLoadMore = users.length <= visibleUsers.length;

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + usersPerPage);
  };

  return (
    <>
      <Filter />
      <ul className={style.tweetList}>
        {visibleUsers.map(user => (
          <TweetCard key={user.id} user={user} />
        ))}
      </ul>

      <LoadMoreBtn onLoadMore={handleLoadMore} isDisabled={isLoadMore} />
    </>
  );
};

export default TweetList;
