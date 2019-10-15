import React from 'react';
import Avatar from './Avatar';
import NicknameBlock from './NicknameBlock';
import './Head.css';
import Button from './Button';
class Head extends React.Component {
    render() {
      return (
          <div className="top">
            <div className="head">
                <div>
                <Avatar/>
                <NicknameBlock/>
                </div>
            </div>
            
        </div>
      );
    }
   }

export default Head;