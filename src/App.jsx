import React from 'react';
import uuid from 'uuid';

import './App.scss';

import Input from './components/Input';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      queryResult: {},
    };
  }

  render() {
    const getVideo = (query) => {
      this.setState({ query });
      const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=';
      return fetch(url + query)
        .then((result) => result.json())
        .then((result) => {
          this.setState({ queryResult: result });
          return result;
        })
        .then((result) => console.log(result, query));
    };

    // eslint-disable-next-line react/destructuring-assignment
    // const video = this.state.queryResult.items && this.state.queryResult.items[0];
    const { queryResult: { items } } = this.state;
    const cards = items && items.map((video) => <Card key={uuid()} video={video} />);
    return (
      <div>
        <Input getVideo={getVideo} />
        {cards}
      </div>
    );
  }
}

export default App;
