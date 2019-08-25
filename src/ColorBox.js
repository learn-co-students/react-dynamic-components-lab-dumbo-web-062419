import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    // const newOpacity = this.props.opacity - 0.1;
    //
    // if (this.props.opacity > 0.2) {
    //   return (
    //     <div>
    //       <ColorBox opacity={newOpacity}/>
    //     </div>
    //   );
    // } else {
    //     return null;
    //   }


// Source code below
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* your conditional code here! */

          // this.props.opacity,
          // console.log(this.props.opacity),
          // console.log(document.getElementsByClassName("color-box").opacity),
          // while (this.props.opacity > 0.2) {
          //   return (
          //     <div>
          //       <ColorBox opacity={this.props.opacity - 0.1}/>
          //     </div>
          //   )
          // }
          // if (this.props.opacity >= 0.2) {
          //   <ColorBox opacity={this.props.opacity - 0.1} />
          // } else {
          //   null
          // }
          this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null
        }
      </div>
    )
  }

}
