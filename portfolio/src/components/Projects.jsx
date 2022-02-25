import React, { Component } from 'react'
import '../style/Projects.css';

let gifTrybeTunes = require('../videos/TrybeTunes.gif');

const trybeTunesUrl = 'https://gabriel-lambertucci.github.io/TrybeTunes/'

class Projects extends Component {
  render() {
    return (
      <section className='projects'> 
          <h2 id='projetos-h2'>Projetos</h2>
        <div className='projects-section'>
            <a className='gif-link'  href={ trybeTunesUrl } target='_blank' rel='noreferrer'>
              <img className='project-img' src={gifTrybeTunes} alt='TrybeTunes' />
            </a>   
            <h3>
            <a className='gif-link'  href={ trybeTunesUrl } target='_blank' rel='noreferrer'>
              TrybeTunes
            </a>
          </h3>
        </div>
      </section>
    )
  }
}

export default Projects;