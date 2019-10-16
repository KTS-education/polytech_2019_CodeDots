import React from 'react';
import './Right.css';
import PropTypes from 'prop-types';
class Right extends React.Component {
    static propTypes={
        friends:PropTypes.array.isRequired,
    };
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            friends:props.friends
        }
    }
    render() {
      return (
        <div>
            <div>
                <p className="mf">Мои друзья</p> {this.state.friends.map((friend)=><img className={"friend"+this.state.friends.indexOf(friend)} src={friend.ava}/>)}
            </div>
        </div>
      );
    }
   }

export default Right;