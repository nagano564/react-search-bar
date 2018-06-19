import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, key) => {
          const { collectionName, artworkUrl100 } = item;

          return <div key={key} className="album">
          <img
            src= {artworkUrl100 !== undefined ? artworkUrl100 : ""}
            alt="Book Image"
            className="album-img"
          />
          <div className="album-text">
            {collectionName}
          </div>
          </div>;
        })}
      </div>
    );
  }
}

export default Gallery;