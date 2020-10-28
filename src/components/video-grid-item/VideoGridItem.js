import React from 'react';
import Style from './VideoGridItem.module.sass';
import { Link } from 'react-router-dom';

const VideoGridItem = ({ id, src, title }) => {
  return (
    <Link to={{ pathname: 'watch', search: `?=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default VideoGridItem;