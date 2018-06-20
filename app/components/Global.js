import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search() {
    const BASE_URL = 'https://itunes.apple.com/search?term=';
    const items = fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        const { results } = json;
        return results;
      })
      .then(results => {
        const result = results.reduce((finalObj, item) => {
          if (!finalObj[item.collectionName]) {
            finalObj[item.collectionName] = item;
          }
          return finalObj;
        }, {});

        const shorterList = Object.keys(result).map(item => result[item]);
        this.setState({ items: shorterList });
      });
  }

  render(){
    return (
      <div className="Global">
        <h2>Kennys React Music Search!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for Music"
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}

export default Global;