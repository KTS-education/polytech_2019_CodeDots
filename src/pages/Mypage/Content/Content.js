import React from 'react';
import Gift from './Gift';
import PropTypes from 'prop-types';
import './Content.css';
class Content extends React.Component {
    state={
      gifts:[
        {img:"https://static.svyaznoy.ru/upload/iblock/4ca/iphone_11_pro_sg_2.jpg",name:"iPhone 11 Pro",price:"65000 ₽",description:"Phone 11 Pro 128GB Space Gray"},
        {img:"https://static.svyaznoy.ru/upload/iblock/4ca/iphone_11_pro_sg_2.jpg",name:"iPhone 11 Pro1",price:"70000 ₽",description:"Phone 11 Pro 256GB Space Gray"},
        {img:"https://static.svyaznoy.ru/upload/iblock/4ca/iphone_11_pro_sg_2.jpg",name:"iPhone 11 Pro2",price:"80000 ₽",description:"Phone 11 Pro 512GB Space Gray"},
        {img:"https://static.svyaznoy.ru/upload/iblock/4ca/iphone_11_pro_sg_2.jpg",name:"iPhone 11 Pro3",price:"100000 ₽",description:"Phone 11 Pro 1024GB Space Gray"},
        
      ]
    }
    static propTypes={
      isMyPage:PropTypes.bool.isRequired
    };
    render() {
      const{isMyPage}=this.props;
      return (
        <div className="content">
          <div className="subContent">
            {/* <p>🙁</p>
            <p>Кажется, ты не любишь дарить подарки</p> */}
            {this.state.gifts.map((gift)=><Gift img={gift.img} name={gift.name} price={gift.price} description={gift.description} isMyPage={isMyPage}/>)}
          </div>
        </div>
      );
    }
   }

export default Content;