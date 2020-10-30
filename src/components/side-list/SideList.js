import React from 'react';
import SideListItem from '../side-list-item/SideListItem';
import Style from './SideList.module.sass';

const SideList = ({ related }) => (
  <div className={Style.sidenav}>
    {related ? (
      related.map((related) => (
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
export default SideList;
