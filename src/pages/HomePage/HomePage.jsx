import homeImg from '../../assets/images/homeImg.jpg';

import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.container}>
      <h1>Welcome to page :)</h1>
      <p className={style.greeting}>I am very glad to see you on our page🤗</p>
      <p className={style.greeting}>Thank you for visiting)</p>
      <p className={style.description}>
        On the tweets tab you will see possible subscriptions.
      </p>
      <p className={style.description}>
        Also, when you follow someone, you will see it. For convenience, there
        is a filter by subscriptions.
      </p>
    </div>
  );
};

export default HomePage;
