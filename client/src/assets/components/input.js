import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FieldText from "@atlaskit/field-text";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, label, name, icon, textComponent, triggerFunction } = this.props;

    return (
      <div className="formInput">
        {textComponent &&(<div className="formLabel">
          <FontAwesomeIcon icon={icon} color="#8e8e8e" size="lg"/>&nbsp;&nbsp;&nbsp;{textComponent}
        </div>)}
        <FieldText type={type} shouldFitContainer="true" label={label} required onChange={triggerFunction} name={name}/>
      </div>
    )
  }
}
