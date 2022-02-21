import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProjectPagesHeader.css';

class ProjectPagesHeader extends Component {
  render() {
    return( 
      <header className="header">
        <div className="video-div">
          <video id='video' src="https://cdn-icons-mp4.flaticon.com/512/6569/6569144.mp4" autoPlay='true' loop="true" />
        </div>
        <nav className="nav">
          <ul className="unordered-list">
            <li class='item-list'> <Link id='Link' to='/'> Home </Link> </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default ProjectPagesHeader