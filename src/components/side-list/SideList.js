import React, { useContext, useEffect } from 'react';
import { fetchReletedData } from '../../apis';
import { Store } from '../../store/index';
import SideListItem from '../side-list-item/SideListItem';
import Style from './SideList.module.sass';

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setReletedVideo = async (id) =>
    await fetchReletedData(id).then((response) =>
      setGlobalState({
        type: 'SET_RELATED',
        payload: { related: response.data.items },
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setReletedVideo(globalState.selected.id), [
    globalState.selected,
  ]);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((related) => (
          <SideListItem
            id={related.id.videoId}
            key={related.id.videoId}
            src={related.snippet.thumbnails.medium.url}
            title={related.snippet.title}
          />
        ))
      ) : (
        <span>no data</span>
      )}
    </div>
  );
};

export default SideList;
