import { NavLink } from 'react-router-dom';
import TweetList from '../../components/TweetList/TweetList';

import style from './TweetPage.module.css';

const TweetPage = () => {
  return (
    <div>
      <NavLink to="/">
        <button className={style.backBtn}>Back</button>
      </NavLink>
      <TweetList />
    </div>
  );
};

export default TweetPage;
