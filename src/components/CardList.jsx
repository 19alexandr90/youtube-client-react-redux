import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const CardList = ({ videos }) => (
  <div id="slider">
    {
        videos
          ? videos.map((video) => <Card key={video.id.videoId} video={video} />) : null
    }

  </div>
);

const mapStateToProps = ({ videos }) => ({
  videos,
});

export default connect(mapStateToProps)(CardList);
