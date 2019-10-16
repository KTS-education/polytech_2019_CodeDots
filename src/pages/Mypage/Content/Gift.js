import React from 'react';
import PropTypes from 'prop-types';
import './Gift.css';
import GButton from'./GButton';
class Gift extends React.Component {

    static propTypes={
        img:PropTypes.string,
        name:PropTypes.string,
        price:PropTypes.string,
        description:PropTypes.string,
        isMyPage:PropTypes.bool
    };
    render() {
        const{img,name,price,description,isMyPage}=this.props;
      return (
        <div className="cc">
            <div className="gift">
                <div className="itemImg">
                    <img  src={img}/>
                    <a className="giftName">{name}</a>
                    <a className="giftPrice">{price}</a>
                    <a className="giftDescription">{description}</a>
                    <GButton isMyPage={isMyPage}/>
                </div>      
            </div>
        </div>
      );
    }
   }

export default Gift;