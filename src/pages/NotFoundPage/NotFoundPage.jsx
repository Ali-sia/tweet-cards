import NotFound from '../../assets/images/NotFound.jpg';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h3>404</h3>
      <h3>We can not find this page((</h3>

      <div className={style.imgContainer}>
        <img src={NotFound} alt="cat not found"></img>
      </div>
    </div>
  );
};

export default NotFoundPage;
