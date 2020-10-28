import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../apis';
import { Store } from '../../store/index';
import VideoPlay from '../video-play/VideoPlay';
import Style from './VideoDetail.module.sass';
import Linkify from 'react-linkify';

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');
    await fetchSelectedData(id).then((response) => {
      const item = response.data.items.shift();
      setGlobalState({ type: 'SET_SELECTED', payload: { selected: item } });
    });
  };
  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
