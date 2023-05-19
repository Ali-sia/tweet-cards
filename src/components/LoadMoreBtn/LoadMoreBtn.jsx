import React from 'react';

import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore, isDisabled }) => {
  return (
    <button
      className={style.loadMore}
      disabled={isDisabled}
      onClick={() => onLoadMore()}
    >
      load more
    </button>
  );
};

export default LoadMoreBtn;
