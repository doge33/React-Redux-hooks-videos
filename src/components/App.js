import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../APIs/youtube';

export default class App extends React.Component {

  state = {videos: []}

  onTermSubmit = async (term) => {
    //youtube is a pre-configured instance of axios
    const response = await youtube.get('/search', {
      params: {
        q: term //the querying term is this.state.term in SearchBar
      }
    })
    this.setState({videos: response.data.items});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

