import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'xUA7bjRvY2Y4LCMqn6'
    };
  }

  search = (query) => {
    // API call
    giphy('CJ8AqzRJbT3oLTZAfSQaDHC3HXqTPRlA').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-part">
          <SearchBar searchFunc={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-part">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default Main;
