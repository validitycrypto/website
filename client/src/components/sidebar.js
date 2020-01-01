import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { faFeatherAlt, faUserCheck, faBullhorn, faStarHalfAlt, faHome, faSearchDollar, faParachuteBox } from'@fortawesome/free-solid-svg-icons'
import { fade } from '@material-ui/core/styles/colorManipulator';
import NavButton from './navbutton'

import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { renderLanding, renderHomepage, renderDesktop, renderSidebar } = this.props;
    const { triggerMvp, classes, sideBar } = this.props;

    return (
      <div className='sideBar'>
        <Drawer
          variant='persistent'
          style={{ zIndex: -1}}
          classes={{ paper: classes.sideBar }}
          onClose={renderSidebar}
          open={sideBar}
          anchor='right'>
            <Paper className='paperMenu' style={{ backgroundColor: fade('#ffffff', 0.275) }}>
              <Link to='/'>
                <NavButton onClick={renderHomepage} icon={faHome} text='Home' />
              </Link>
              <Link to='/blog'>
                <NavButton onClick={renderSidebar} icon={faBullhorn} text='Blog' />
              </Link>
              <Link to='/mvp'>
                <NavButton onClick={triggerMvp} icon={faStarHalfAlt} text='MVP' />
              </Link>
              <Link to='/airdrop'>
                <NavButton onClick={renderSidebar} icon={faParachuteBox} text='Airdrop' />
              </Link>
              <Link to='/register'>
                <NavButton onClick={renderSidebar} icon={faUserCheck} text='Register' />
              </Link>
              <Link to='/verify'>
                <NavButton onClick={renderSidebar} icon={faFeatherAlt} text='Verify' />
              </Link>
              <Link to='/Survey'>
                <NavButton onClick={renderSidebar} icon={faSearchDollar} text='Survey' />
              </Link>
            </Paper>
            <b className='etherSymbol'>λ</b>
        </Drawer>
      </div>
    )
  }
}
