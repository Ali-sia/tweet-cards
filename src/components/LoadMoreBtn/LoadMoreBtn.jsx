import React from 'react';

import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore, isDisabled }) => {
  return (
    <div className={style.container}>
      <button
        className={style.loadMore}
        disabled={isDisabled}
        onClick={() => onLoadMore()}
      >
        load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
