import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FieldText from "@atlaskit/field-text";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, name, icon, textComponent, triggerFunction } = this.props;

    return (
      <div className="formInput">
        <FieldText shouldFitContainer="true" label={label} required onChange={triggerFunction} name={name}/>
        <div className="formLabel">
          <FontAwesomeIcon icon={icon} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;{textComponent}
        </div>
      </div>
    )
  }
}
