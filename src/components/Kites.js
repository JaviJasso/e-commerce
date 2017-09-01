import React, { Component } from 'react';

import '../styles/App.css';

class Kites extends Component {
  render() {
    return (
      <div className="kitesClass">
        <div className="firstSup">
          <h2>2018 Slingshot Rally Kite</h2>
          <p>The Slingshot Rally is a 5 strut kite designed for beginner to intermediate kiters seeking stability, easy relaunch and a massive wind range</p>
          <p>Prince: $1,049</p>
          <img src="http://www.kitesurfwallpaper.com/images/papers/cabrinha-kiteboarding-switchblade-2015-grab-hd-1.jpg" alt=""/>
        </div>
        <div className="firstSup">
          <h2>2018 Naish Slash Kite</h2>
          <p>Naish has designed the Slash for the dedicated wave rider that wants to get a kite with responsive turning and plenty of drift. For 2018, Naish added an 11m and a 12m to the Slash line for light wind wave riding.</p>
          <p>Price: $1,105</p>
          <img src="http://www.kitesurfwallpaper.com/images/papers/cabrinha-kiteboarding-alberto-rondina-inverted-xcaliber-board-hd-1.jpg" alt=""/>
        </div>
        <div className="firstSup">
          <h2>Core Section 2 Kite</h2>
          <p>WAVE PHENOMENON | Connect with every wave like never before.</p>
          <p>Price: $1,179.00</p>
          <img src="https://i.pinimg.com/736x/57/e1/fc/57e1fc231da3aad75ab07965abcc8feb--sport-girl-kitesurfing.jpg" alt=""/>
        </div>
      </div>
    );
  }
}

export default Kites;
