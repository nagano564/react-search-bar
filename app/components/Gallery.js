import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        {
          this.props.items.map(item => {
            let { title } = item.volumeInfo
            return (
              <div>{title}</div>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;