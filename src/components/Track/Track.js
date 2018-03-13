import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.isRemoval = true;

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  /*renderAction() {
    if (this.isRemoval) {
      return '-';
    }
    return '+';
  }*/

  /*addTrack(newAdd) {
    console.log('newAdd.target.value: ', newAdd.target.value);
    this.props.track = this.props.onAdd;
    //this.props.onAdd(newAdd.target.value);
  }*/

  addTrack() {
    //console.log('this.props.track: ', this.props.track);
    this.props.track = this.props.onAdd;
    //this.props.onAdd(newAdd.target.value);
  }

  removeTrack() {
    this.props.track = this.props.onRemove;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{!this.props.isRemoval ? <div onClick={this.addTrack}>+</div> : <div onClick={this.removeTrack}>-</div>}</a>
      </div>
    );
  }
}



export default Track;
