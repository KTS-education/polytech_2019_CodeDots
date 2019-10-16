import React from 'react';
import Avatar from './Avatar';
import NicknameBlock from './NicknameBlock';
import PropTypes from 'prop-types';
import './Head.css';
class Head extends React.Component {
  static propTypes={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    desire:PropTypes.string.isRequired,
  };
    render() {
      const {avatar,name,desire}=this.props;
      return (
          <div className="top">
            <div className="head">
                <div>
                <Avatar avatar={avatar}/>
                <NicknameBlock name={name} desire={desire}/>
                </div>
            </div>
            
        </div>
      );
    }
   }

export default Head;