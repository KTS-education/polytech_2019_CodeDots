import React from 'react';
import Left from './Left';
import Right from './Right';
import './Navbar.css';
class Navbar extends React.Component {
    render() {
      return (
        <div className="container-nav">
          <div className="box">
            <Left/>
            <Right/>
          </div>
        </div>
      );
    }
   }

export default Navbar;