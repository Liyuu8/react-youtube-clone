import React from 'react';
import Style from './VideoGrid.module.sass';

const VideoGrid = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};

export default VideoGrid;
