import React from 'react';

import Preview from './Preview';
import Information from './Information';
import Description from './Description';


const Card = (props) => {
  const { video: { snippet: { channelTitle, publishedAt, title } } } = props;
  return (
    <div id="slider">
      <div id="video-container">
        <div className="video">
          <Preview title={title} />
          <Information channelTitle={channelTitle} publishedAt={publishedAt} />
          <Description />
        </div>
      </div>
    </div>
  );
};

export default Card;
