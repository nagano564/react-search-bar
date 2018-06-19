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
    const BASE_URL = "https://itunes.apple.com/search?term="
    fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'} )
      .then(response => response.json())
      .then(json => {
        let { results } = json;
        this.setState({items: results})
      });
  }

  render(){
    return (
      <div className="Global">
        <h2>Music Search!</h2>
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