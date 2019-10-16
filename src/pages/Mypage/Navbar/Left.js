import React from 'react';
import PropTypes from 'prop-types';
class Left extends React.Component {

    static propTypes={
      isMyPage:PropTypes.bool.isRequired,
      myAvatar:PropTypes.string
    };
    static defaultProps={
      myAvatar:""
    }


    leftRender(isMypage,myAvatar) {
      if(isMypage)
        return <div className="left"><a>Вернуться к поиску</a></div>;
      else
        return <div className="left"><img className="myAva" src={myAvatar}/><a>Мое имя</a> </div>
    }
    render() {
      const{isMyPage,myAvatar}=this.props;
      return (
          this.leftRender(isMyPage,myAvatar)
      );
    }
   }

export default Left;