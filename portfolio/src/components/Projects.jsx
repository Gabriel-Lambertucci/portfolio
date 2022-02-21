import React, { Component } from 'react'
import '../style/Projects.css';
import { Link } from 'react-router-dom';

let gifTrybeTunes = require('../videos/TrybeTunes.gif');

class Projects extends Component {
  render() {
    return (
      <section className='projects'> 
          <h2 id='projetos-h2'>Projetos</h2>
        <div className='projects-section'>
            <Link onClick={ this.onClickHandler } className='gif-link'  to='/projects-TrybeTunes'>
              <img className='project-img' src={gifTrybeTunes} alt='TrybeTunes' />
            </Link>   
            <h3>
            <Link onClick={ this.onClickHandler } className='gif-link'  to='/projects-TrybeTunes'>
              TrybeTunes
            </Link>
          </h3>
        </div>
      </section>
    )
  }
}

export default Projects;