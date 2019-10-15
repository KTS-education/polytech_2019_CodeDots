import React from 'react';
import Navbar from "./Navbar/Navbar";
import Head from "./Head/Head";
import Content from "./Content/Content";
class Mypage extends React.Component {
    render() {
      return (
        <div>
          <Navbar />
          <Head />
          <Content />
        </div>
      );
    }
   }

export default Mypage;
   