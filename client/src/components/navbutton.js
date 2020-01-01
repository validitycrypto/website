import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@atlaskit/button'

export default class NavButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick, text, icon } = this.props;

    return (
      <Button transperant className='paperButton' onClick={onClick}>
        <span className='paperText'>
          <FontAwesomeIcon className='paperIcon' color='#ffffff' icon={icon} size='lg'/>
          {text}
        </span>
      </Button>
    )
  }
}
