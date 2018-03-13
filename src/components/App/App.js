import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);

    //this.setState({abc: {xyz: 'new value'}});

    this.state = {
      searchResults: [ //*************************** Step 31 & update with Step 88
        {name: 'song name'},
        {artist: 'artist name'},
        {album: 'album name'},
        {id: '1'}
      ],
      playlistName: 'hc-playlistName', //*************************** Step 37
      playlistTracks: [
        {name: 'playlist name'},
        {artist: 'playlist artist'},
        {album: 'playlist album'},
        {id: '2'}
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    //console.log('Testing the state: ', this.state.playlistTracks);
    //console.log('track: ', track);

    if (this.state.playlistTracks.find(tracks => tracks.id !== track.id)) {
      this.state.playlistTracks.push(track);
      this.setState({
        playlistTracks: this.state.playlistTracks
      });
    }
  }

  removeTrack(track) {
    if (this.state.playlistTracks.find(tracks => tracks.id === track.id)) {
      this.state.playlistTracks.splice(track);
      this.setState({
        playlistTracks: this.state.playlistTracks
      });
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist(playlistTracks) {
    // trackURIs ******** Step 63
    //let trackURIs = [playlistTracks.uri, playlistTracks.uri, playlistTracks.uri];
    //let trackURIs = ['playlistTracks.uri1', 'playlistTracks.uri2', 'playlistTracks.uri3'];
    Spotify.savePlaylist();
    this.setState({ playlistName: 'New PlayList'});
    this.setState({searchResults: [
      {name: ''},
      {artist: ''},
      {album: ''},
      {id: ''}
    ] })
  }

  search(searchTerm) {
    console.log('searchTerm: ', searchTerm);
  }

  /*search() {
    const spotifyResponse = {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
          },
          "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
          "id" : "0C0XlULifJtAgn6ZNCW2eu",
          "name" : "The Killers",
          "type" : "artist",
          "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4OHNH3sDzIxnmUADXzv2kT"
        },
        "href" : "https://api.spotify.com/v1/albums/4OHNH3sDzIxnmUADXzv2kT",
        "id" : "4OHNH3sDzIxnmUADXzv2kT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ac68a9e4a867ec3ce8249cd90a2d7c73755fb487",
          "width" : 629
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
          "width" : 295
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/7c3ec33d478f5f517eeb5339c2f75f150e4d601e",
          "width" : 63
        } ],
        "name" : "Hot Fuss (Deluxe Version)",
        "type" : "album",
        "uri" : "spotify:album:4OHNH3sDzIxnmUADXzv2kT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
        },
        "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
        "id" : "0C0XlULifJtAgn6ZNCW2eu",
        "name" : "The Killers",
        "type" : "artist",
        "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 222200,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBFFP0300052"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"
      },
      "href" : "https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp",
      "id" : "3n3Ppam7vgaVa1iaRUc9Lp",
      "name" : "Mr. Brightside",
      "popularity" : 73,
      "preview_url" : "https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:3n3Ppam7vgaVa1iaRUc9Lp"
    };

    const tracks = JSON.parse(spotifyResponse);
    console.log("tracks: ", tracks);
  }*/

  /*search(event) { // ********************* Step 88
    console.log('event: ', event);
    Spotify.search();
  }*/

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} removeTrack={this.removeTrack}/>
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName} onChange={this.handleNameChange} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
