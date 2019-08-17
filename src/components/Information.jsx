import React from 'react';

const Information = (props) => {
  const { channelTitle, publishedAt } = props;
  return (
    <div className="video-information">
      <i className="author fas fa-male" />
      <p className="author">{channelTitle}</p>
      <i className="date far fa-calendar-alt" />
      <p className="date">{publishedAt}</p>
    </div>
  );
};

export default Information;
