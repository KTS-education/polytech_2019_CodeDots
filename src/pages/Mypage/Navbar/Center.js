import React from 'react';
import PropTypes from 'prop-types';
class Center extends React.Component {
    static propTypes={
        isMyPage:PropTypes.bool.isRequired
    };
    render() {
        
    const {isMyPage}=this.props;
    console.log(this.props);
    let a=isMyPage?"":"Вернуться к поиску";
      return (
        <div className="center">
          <a>{a}</a>
        </div>
      );
    }
   }

export default Center;