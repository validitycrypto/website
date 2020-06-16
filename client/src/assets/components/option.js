import React, { Component } from 'react'
import Select from '@atlaskit/select'

export default class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, label, options, onChange } = this.props;
    return (
      <div className='formInput'>
        <label class='Label__LabelWrapper-sc-17towfw-0 keOXhT'>
          <div class='Label__LabelInner-sc-17towfw-1 dKDRgr'>
            <span>{label}</span>
            <span class='Label__RequiredIndicator-sc-17towfw-2 zxzJX' role='presentation'>*</span>
          </div>
        </label>
        <Select name={name} className='selectOption' options={options} onChange={onChange} />
      </div>
    )
  }
}
