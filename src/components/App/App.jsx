import { Toaster } from 'react-hot-toast';

import style from './App.module.css';

import TweetList from '../TweetList/TweetList';

// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsers } from '../../redux/users/users.operations';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  return (
    <div className={style.container}>
      <Toaster />

      <TweetList />
    </div>
  );
}

export default App;
