import React, { useEffect, useContext } from 'react';
import Layout from '../components/layout/Layout';
import { fetchPopularData } from '../apis/index';
import { Store } from '../store';
import VideoGrid from '../components/video-grid/VideoGrid';
import VideoGridItem from '../components/video-grid-item/VideoGridItem';

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setPopularVideo = async () =>
    await fetchPopularData().then((response) =>
      setGlobalState({
        type: 'SET_POPULAR',
        payload: { popular: response.data.items },
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPopularVideo(), []);

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((popular) => (
            <VideoGridItem
              id={popular.id}
              key={popular.id}
              src={popular.snippet.thumbnails.standard.url}
              title={popular.snippet.title}
            />
          ))}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
