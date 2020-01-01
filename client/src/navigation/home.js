import React, { Component } from "react"
import PropTypes from 'prop-types';

import ReactGA from 'react-ga'

import Landing from "../pages/landing"
import PageOne from "../pages/pageone"
import PageTwo from "../pages/pagetwo"
import PageThree from "../pages/pagethree"
import PageFour from "../pages/pagefour"
import PageFive from "../pages/pagefive"
import PageSix from "../pages/pagesix"
import PageSeven from "../pages/pageseven"
import PageEight from "../pages/pageeight"
import PageNine from "../pages/pagenine"
import PageTen from "../pages/pageten"
import PageEleven from "../pages/pageeleven"

const dataPropType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.number.isRequired,
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
  })
);

class Home extends Component {

  componentWillMount = () => {
    ReactGA.pageview('/');
  }

 render() {
  return (
    <div className="homeNavigation">
      <Landing/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <PageSix />
      <PageSeven/>
      <PageEight/>
      <PageNine/>
      <PageTen/>
      <PageEleven/>
    </div>
    )
  }
}

Home.propTypes = { data: dataPropType };

export default Home;
