import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { getVideos } = props;
  // const newConstName_getVideo = props.propName_GetVideo;
  const onSubmit = (event) => {
    event.preventDefault();
    return getVideos(event.target[1].value);
  };

  return (
    <form className="search-row" onSubmit={onSubmit}>
      <button className="search-button" type="submit">
        <i className="fa fa-search" />
      </button>
      <input className="search-row-input" type="text" placeholder="What kind of video do you wanna find?" />
    </form>
  );
};

Input.propTypes = {
  getVideos: PropTypes.func.isRequired,
};

export default Input;
