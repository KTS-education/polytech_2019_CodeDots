import React from 'react';
import PropTypes from 'prop-types';
import './GButton.css';
class GButton extends React.Component {
  static propTypes={
    isMyPage:PropTypes.bool
  };

    renderButton(isMyPage){
     
      if(isMyPage)
        return <button>Удалить</button>;
      else{
        let butText="";
        switch(Math.floor(Math.random()*3)){
          case 0:
            butText="Подарю"
            break;
          case 1:
            butText="Не подарю"
            break;
          case 2:
            butText="Уже подарят"
            break;
        }
        return <button>{butText}</button>
      }
    }
    render() {
      const {isMyPage}=this.props;
      return (
        <div className="gContainer">
            <div className="gbutton">
                {this.renderButton(isMyPage)}
                <img src="https://yt3.ggpht.com/a/AGF-l7-wWTFlEwHThIGBCQAwNbjrQChwuHyvrNKfiw=s900-c-k-c0xffffffff-no-rj-mo"/>
            </div>
        </div>
      );
    }
   }

export default GButton;