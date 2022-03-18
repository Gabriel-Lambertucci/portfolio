import React, { Component } from 'react'
import '../style/Projects.css';

let gifTrybeTunes = require('../videos/TrybeTunes.gif');
let gifTrivia = require('../videos/Trivia.mp4');

const trybeTunesUrl = 'https://gabriel-lambertucci.github.io/TrybeTunes/';
const triviaURL = 'https://gabriel-lambertucci.github.io/Trivia-Game/';

class Projects extends Component {
  render() {
    return (
      <section className='projects'> 
          <h2 id='projetos-h2'>Projetos</h2>
        <div className='projects-section'>
          <div className='project-trybetunes'>
            <a className='gif-link'  href={ trybeTunesUrl } target='_blank' rel='noreferrer'>
              <img className='project-img' src={gifTrybeTunes} alt='TrybeTunes' />
            </a>   
            <h3>
            <a className='gif-link'  href={ trybeTunesUrl } target='_blank' rel='noreferrer'>
              TrybeTunes
            </a>
            </h3>
          </div>
          <div className='project-trivia'>
              <a className='gif-link'  href={ triviaURL } target='_blank' rel='noreferrer'>
                <video className='project-img' src={gifTrivia} autoplay='true' loop='true' muted />
              </a>   
              <h3>
              <a className='gif-link'  href={ triviaURL } target='_blank' rel='noreferrer'>
                Jogo de Trivia
              </a>
            </h3>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;