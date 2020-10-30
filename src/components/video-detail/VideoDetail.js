import React from 'react';
import VideoPlay from '../video-play/VideoPlay';
import Style from './VideoDetail.module.sass';
import Linkify from 'react-linkify';

const VideoDetail = ({ selected }) =>
  selected && selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={selected.id} />
      <p>{selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );

export default VideoDetail;
