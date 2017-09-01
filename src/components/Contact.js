import React, { Component } from 'react';
import Javi from './Assets/javi.manish.jpg'
import '../styles/App.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <h1>Awe in Motion </h1>
        <p>Wander with Us!</p>
        <h1><email>Awestruck-Co@gmail.com</email></h1>
        <img src={Javi} alt=""/>
      </div>
    );
  }
}

export default Contact;
