import React, { Component } from 'react'
import { Loader } from 'react-loaders'

export default class Pending extends Component {

  render() {
    return (
      <Loader size="Large" color="#ffa500" type="ball-triangle-path" active />
    )
  }
}
