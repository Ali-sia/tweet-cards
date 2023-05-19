import { Toaster } from 'react-hot-toast';

import './App.css';

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
    <div className="App">
      <Toaster />
      <header className="App-header">
        <TweetList />
      </header>
    </div>
  );
}

export default App;
