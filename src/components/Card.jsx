import React from 'react';

import Preview from './Preview';
import Information from './Information';
import Description from './Description';


const Card = (props) => {
  const {
    video: {
      snippet: {
        channelTitle, publishedAt, title, description, videoId, thumbnails,
      },
    },
  } = props;
  return (
    <div id="video-container">
      <div className="video">
        <Preview title={title} videoId={videoId} thumbnails={thumbnails} />
        <Information channelTitle={channelTitle} publishedAt={publishedAt} />
        <Description description={description} />
      </div>
    </div>
  );
};

export default Card;
