/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
          <li className={this.isPathActive('/clients') || this.state.clientsMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ clientsMenuOpen: !this.state.clientsMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Clientes <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.clientsMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/clients/list') ? 'active' : null}>
                  <Link to="/clients/list">Lista</Link>
                </li>
                <li className={this.isPathActive('/clients/edit') ? 'active' : null}>
                  <Link to="/clients/edit">Nuevo</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/reciepts') || this.state.receiptsMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ receiptsMenuOpen: !this.state.receiptsMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Recibos <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.receiptsMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/receipts/list') ? 'active' : null}>
                  <Link to="/receipts/list">Lista</Link>
                </li>
                <li className={this.isPathActive('/receipts/new') ? 'active' : null}>
                  <Link to="/receipts/new">Nuevo</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        {/* <li className={this.isPathActive('/clients') || this.state.clientsMenuOpen ? 'active' : null}> */}
          {/* <a onClick={() => this.setState({ clientsMenuOpen: !this.state.clientsMenuOpen })}> */}
            {/* <i className="pe-7s-plugin"></i> */}
            {/* <p> */}
              {/* Clientes */}
            {/* <b className="caret"></b> */}
            {/* </p> */}
          {/* </a> */}
          {/* <Collapse in={this.state.clientsMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Buttons</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">Grid System</Link>
                </li>
                <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li>
              </ul>
            </div>
          </Collapse> */}
        {/* </li> */}
        {/* <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>Tables <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-graph"></i>
            <p>Charts</p>
          </Link>
        </li>
        <li className={this.isPathActive('/calendar') ? 'active' : null}>
          <Link to="/calendar">
            <i className="pe-7s-date"></i>
            <p>Calendar</p>
          </Link>
        </li> */}
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);