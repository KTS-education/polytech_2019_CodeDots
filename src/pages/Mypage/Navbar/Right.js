import React from 'react';
import './Right.css';
class Right extends React.Component {
    state={
        friends:[
            {ava:"https://cdn1.flamp.ru/624c1667233b6e8be3fb07bd7bd95756.jpg"},
            {ava:"https://cdn1.flamp.ru/624c1667233b6e8be3fb07bd7bd95756.jpg"},
            {ava:"https://cdn1.flamp.ru/624c1667233b6e8be3fb07bd7bd95756.jpg"}
        ]
    };
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