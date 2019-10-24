import cx from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import { setMobileNavVisibility } from '../../reducers/Layout';
/**
 * Pages
 */
import Clients from '../Clients';
import Dashboard from '../Dashboard';
import Receipts from '../Receipts';
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
          <Route path="/clients" component={Clients} />
          <Route path="/receipts" component={Receipts} />
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