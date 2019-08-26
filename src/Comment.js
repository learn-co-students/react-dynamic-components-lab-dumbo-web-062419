// add Comment component here
import React, { Component } from 'react';


class Comment extends Component {
  render(){
    console.log(this.props.commentText)
    return(
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }

}


export default Comment
