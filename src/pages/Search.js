import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchData } from '../apis';
import Layout from '../components/layout/Layout';
import VideoGridItem from '../components/video-grid-item/VideoGridItem';
import VideoGrid from '../components/video-grid/VideoGrid';
import { Store } from '../store';

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    if (query) {
      await fetchSearchData(query).then((response) =>
        setGlobalState({
          type: 'SET_SEARCHED',
          payload: { searched: response.data.items },
        })
      );
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSearchResult(), [location.search]);

  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? (
          globalState.searched.map((searched) => (
            <VideoGridItem
              id={searched.id.videoId}
              key={searched.id.videoId}
              src={searched.snippet.thumbnails.medium.url}
              title={searched.snippet.title}
            />
          ))
        ) : (
          <span>no data</span>
        )}
      </VideoGrid>
    </Layout>
  );
};

export default Search;
