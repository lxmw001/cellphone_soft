import cx from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import MobileMenu from '../../components/MobileMenu';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';
import { setMobileNavVisibility } from '../../reducers/Layout';
import Calendar from '../Calendar';
import Charts from '../Charts';
import Components from '../Components';
/**
 * Pages
 */
import Dashboard from '../Dashboard';
import Forms from '../Forms';
import Tables from '../Tables';
import UserProfile from '../UserProfile';
import Footer from './Footer';
import Header from './Header';

const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        <SideBar />

        <div className="main-panel">
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route path="/components" component={Components} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/forms" component={Forms} />
          <Route path="/tables" component={Tables} />
          <Route path="/charts" component={Charts} />
          <Route path="/calendar" component={Calendar} />
          <Footer />
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));