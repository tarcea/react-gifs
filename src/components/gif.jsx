import React, { Component } from 'react';

class Gif extends Component {
  gifUpdate = () => {
    console.log(this.props.id);
    // this.src = ev.target.src;
    // const newSrc = ev.target.src;
    // this.src = newSrc;
    const randId = this.props.id;
    console.log(randId);

  }
  render() {
  const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.gifUpdate} />
      );
  }
}
export default Gif;
