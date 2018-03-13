import React from 'react';
import './SearchBar.css';
import Spotify from '../util/Spotify.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    console.log('In SearchBar.search');
    this.props.onSearch = this.state.term; // ************************* Step 69
    Spotify.search();
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });  // ************************* Step 71
    //console.log('event.target.value', event.target.value);
    //console.log('term', this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
