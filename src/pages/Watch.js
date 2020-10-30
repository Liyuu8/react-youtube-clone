import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import VideoDetail from '../components/video-detail/VideoDetail';
import SideList from '../components/side-list/SideList';
import { Store } from '../store/index';
import { useLocation } from 'react-router-dom';
import { fetchReletedData, fetchSelectedData } from '../apis';

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');
    if (id) {
      const [selectedResponse, relatedResponse] = await Promise.all([
        fetchSelectedData(id),
        fetchReletedData(id),
      ]);

      setGlobalState({
        type: 'SET_SELECTED',
        payload: { selected: selectedResponse.data.items.shift() },
      });
      setGlobalState({
        type: 'SET_RELATED',
        payload: { related: relatedResponse.data.items },
      });
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setVideos(), [location.search]);

  return (
    <Layout>
      <VideoDetail selected={globalState.selected} />
      <SideList related={globalState.related} />
    </Layout>
  );
};

export default Watch;
