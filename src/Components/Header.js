import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    console.log(this.props)
    const {headerData, displayA, togglePanel } = this.props;
    let key = 1
    return (
      <ul className="Header">
      {
        headerData.map(item => {
            return (<li key={key++}>{item}</li>)
          })
      }
      <li className="toggle-button" onClick={() => togglePanel()}>{displayA ? '-' : '+'}</li>
      </ul>
    )
  }

}

export default Header;
