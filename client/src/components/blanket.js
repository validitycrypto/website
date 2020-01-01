import React, { Component, Fragment } from 'react'
import Social from './social'

export default class Blanket extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { revealBlanket, socialTrigger, blanketComponent } = this.props;

    if(blanketComponent){
      return (
        <div className='socialModal' onClick={revealBlanket}>
          <Social socialTrigger={socialTrigger} />
       </div>
    )
  } else {
    return(
      <Fragment />
    );
  }
 }
}
