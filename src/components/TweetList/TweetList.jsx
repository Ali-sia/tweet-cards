import { useState, useEffect } from 'react';
import { fetchUsers } from '../../redux/users/users.operations';
import { getUsers } from '../../redux/users/user.selectors';

import { useSelector, useDispatch } from 'react-redux';

import style from './TweetList.module.css';

import TweetCard from '../TweetCard/TweetCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const TweetList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const usersPerPage = 3;
  const [visibleItems, setVisibleItems] = useState(usersPerPage);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const isUsers = !(users.length === undefined);
  if (!isUsers) {
    return null;
  }

  const visibleUsers = users.slice(0, visibleItems);
  const isLoadMore = users.length <= visibleUsers.length;

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + usersPerPage);
  };

  return (
    <>
      <div className={style.selectContainer}></div>
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
