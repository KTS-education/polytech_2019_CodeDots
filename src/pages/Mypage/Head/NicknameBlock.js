import React from 'react';
import './NicknameBlock.css';
import Button from './Button';
class NicknameBlock extends React.Component {
    render() {
      return (
        <div className="container">
            <div className="nickname">
                <h1>Мое имя</h1>
                <div>Хочу получить</div>
                <div>Хочу подарить</div>
                
            </div>
            <Button/>
        </div>
        
      );
    }
   }

export default NicknameBlock;