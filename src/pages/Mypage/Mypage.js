import React from 'react';
import Navbar from "./Navbar/Navbar";
import Head from "./Head/Head";
import Content from "./Content/Content";
class Mypage extends React.Component {

    state={
      friends:[
        {ava:"https://avatars.mds.yandex.net/get-pdb/1793884/d8418d7c-368e-43f2-8fb6-03f81ef7554e/s1200?webp=false"}, 
        {ava:"https://yt3.ggpht.com/a/AGF-l796bOFDhWvRHF3vaGttrTeY-9HEM4fsiiEwMg=s900-c-k-c0xffffffff-no-rj-mo"},
        {ava:"https://yt3.ggpht.com/a/AGF-l7_a5_LcLFdV4wXPprcgoPxotd4FXc-1yJb34A=s900-c-k-c0xffffffff-no-rj-mo"}
      ],
      myAvatar:"https://yt3.ggpht.com/a/AGF-l78i1RHLfg1FbUHD8UQ2xeJ4tJvYEjyAtB3_ew=s900-c-k-c0xffffffff-no-rj-mo",
      avatar:"https://cdn1.flamp.ru/624c1667233b6e8be3fb07bd7bd95756.jpg",
      myName:"Мое имя",
      friendName:"Имя друга",
      isMyPage:false
    }

    renderHead(){
      if(this.state.isMyPage)
        return <Head avatar={this.state.myAvatar} name={this.state.myName} desire="Хочу"/>
      else
        return <Head avatar={this.state.avatar} name={this.state.friendName} desire="Хочет"/>
    }
    render() {
      return (
        <div>
          <Navbar friends={this.state.friends} isMyPage={this.state.isMyPage} myAvatar={this.state.myAvatar} />
          {this.renderHead()}
          <Content isMyPage={this.state.isMyPage}/>
        </div>
      );
    }
   }

export default Mypage;
   