import React from 'react';
import Left from './Left';
import Right from './Right';
import './Navbar.css';
import Center from './Center';
import PropTypes from 'prop-types';
class Navbar extends React.Component {
  static propTypes={
      friends:PropTypes.array,
      myAvatar:PropTypes.string,
      isMyPage:PropTypes.bool.isRequired
  };
  static defaultProps={
    myAvatar:""
  }

    constructor(props){
     super(props);
     
     this.state={
      friends:props.friends,
      myAvatar:props.myAvatar
     }
    }
    render() {
      const {isMyPage}=this.props;
      return (
        <div className="container-nav">
          <div className="box">
            <Left isMyPage={isMyPage} myAvatar={this.state.myAvatar}/>
            <Center isMyPage={isMyPage}/>
            <Right friends={this.state.friends}/>
          </div>
        </div>
      );
    }
   }

export default Navbar;