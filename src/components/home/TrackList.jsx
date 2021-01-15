import React from 'react';

import { trackListData } from 'data';

const TrackList = () => {
  return (
    <section className='trackList'>
      <h1>The Tracklist</h1>
      <div className='trackList__list'>
        {trackListData.map((track, key) => (
          <img src={track} alt='track' key={key} />
        ))}
      </div>
    </section>
  );
};

export default TrackList;
