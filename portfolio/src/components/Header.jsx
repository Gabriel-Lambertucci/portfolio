import React, { Component } from 'react'
import '../style/Header.css'



class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="video-div">
          <video id='video' src="https://cdn-icons-mp4.flaticon.com/512/6569/6569144.mp4" autoPlay='true' loop="true" muted />
        </div>
        <nav className="nav">
          <ul className="unordered-list">
            <a href="#h2-skills" id ="item2"><li className="item-list">Skills</li></a>
            <a href="#projetos-h2"><li className="item-list">Projetos</li></a>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;