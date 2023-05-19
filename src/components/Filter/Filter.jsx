import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/users/user.selectors';
import { setStatusFilter } from '../../redux/users/filter.slice';

import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    const option = e.target.value;
    dispatch(setStatusFilter(option));
  };

  return (
    <div className={style.selectContainer}>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Show all</option>
        <option value="unsubscribed">Follow</option>
        <option value="subscribed">Following</option>
      </select>
    </div>
  );
};

export default Filter;
