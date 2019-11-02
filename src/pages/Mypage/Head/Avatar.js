import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
class Avatar extends React.Component {
    static propTypes={
      avatar:PropTypes.string.isRequired,
    };
    render() {
      const {avatar}=this.props;
      return (
        <div className="avatar">
          <img src={avatar}/>
        </div>
      );
    }
   }

export default Avatar;