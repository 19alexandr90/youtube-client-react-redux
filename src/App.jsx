import React from 'react';
import uuid from 'uuid';

import './App.scss';

import Input from './components/Input';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentQuery: '',
      queryResult: {},
      nextPageToken: '',
      videos: [],
    };
  }

  render() {
    const getVideos = (query) => {
      const { nextPageToken, currentQuery, videos } = this.state;
      const queryUrl = `&q=${query}`;
      const pageToken = nextPageToken && query === currentQuery ? `&pageToken=${nextPageToken}` : '';
      const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=4';
      return fetch(url + queryUrl + pageToken)
        .then((result) => result.json())
        .then((result) => {
          const newVideos = videos.concat(result.items);
          this.setState({ queryResult: result, currentQuery: query, nextPageToken: result.nextPageToken, videos: newVideos });
          return result;
        })
        .then((result) => console.log(result, this.state.currentQuery, this.state.nextPageToken));
    };

    // eslint-disable-next-line react/destructuring-assignment
    // const video = this.state.queryResult.items && this.state.queryResult.items[0];
    const { currentQuery, videos } = this.state;
    const cards = videos.map((video) => <Card key={uuid()} video={video} />);
    return (
      <div>
        <Input getVideos={getVideos} />
        <div id="slider">
          {cards}
        </div>
        <button type="button" className="downloadVideos" onClick={() => getVideos(currentQuery)}>Добавить видео</button>
      </div>
    );
  }
}

export default App;
