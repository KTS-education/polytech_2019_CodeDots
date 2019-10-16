import React from 'react';
import './NicknameBlock.css';
import Button from './Button';
import PropTypes from 'prop-types';
class NicknameBlock extends React.Component {
  static propTypes={
    name:PropTypes.string.isRequired,
    desire:PropTypes.string.isRequired
  };
    render() {
      const {name,desire}=this.props;
      return (
        <div className="container">
            <div className="nickname">
                <h1>{name}</h1>
                <div>{desire} получить</div>
                <div>{desire} подарить</div>
                
            </div>
            <Button/>
        </div>
        
      );
    }
   }

export default NicknameBlock;