import React, { Component } from 'react'
import Lottie from 'react-lottie';

import * as animation from "../assets/animations/error.json";

const defaultOptions = {
    animationData: animation.default,
    loop: false
};

export default class Error extends Component {

  render() {
    return (
      <Lottie
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
        loop={false}
        height={100}
        width={100}
        speed={10}
       />
    )
  }
}
