import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, key) => {
          const { collectionName, artworkUrl100, collectionViewUrl } = item;

          return ( 
            <a 
              key={key} 
              className="album"
              href= {collectionViewUrl}
              target="_blank"
            >
            <img
              src= {artworkUrl100 !== undefined ? artworkUrl100 : ""}
              alt="Book Image"
              className="album-img"
            />
            <div className="album-text">
              {collectionName}
            </div>
          </a>
          )
        })}
      </div>
    );
  }
}

export default Gallery;