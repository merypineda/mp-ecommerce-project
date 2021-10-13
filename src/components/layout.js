import React, { Component } from 'react';

import Header from './headernavbar/header.js'
import Navbar from './headernavbar/navnar.js'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}
export default Layout;