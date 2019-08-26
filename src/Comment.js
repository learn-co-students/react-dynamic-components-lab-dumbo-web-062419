// add Comment component here
import React, { Component } from 'react';

export default class X extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="comment">
        <p>{this.props.commentText}</p>
      </div>
    );
  }
}
