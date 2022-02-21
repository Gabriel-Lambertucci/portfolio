import React, { Component } from 'react'
import '../style/Apresentation.css';

class Apresentation extends Component {
  render() {
    return (
      <section className='apresentation-section'>
        <div className='name'>
          <h1>Gabriel Lambertucci,</h1>
          <p id='paragraph'>Estudante de Desenvolvimento Web na <a id='link' href='https://www.betrybe.com/' rel='noreferrer' target='_blank'>Trybe</a></p>
        </div>
        
          <div className='perfil-photo-div'>
            <img id='perfil-photo' src='https://pbs.twimg.com/profile_images/1481792625443229702/7t6wuTjJ_400x400.jpg' alt='Foto'></img>
            <div className='div'>
              <div className='icons-div'>
                <a href='https://github.com/Gabriel-Lambertucci/Trybe' target='_blank' rel='noreferrer'>
                  <img className='footer-icons' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' alt='GitHub' />
                </a>
              </div>
              <div className='icons-div'>
                <a href='https://www.linkedin.com/in/gabriel-lambertucci-698765172/' target='_blank' rel='noreferrer'>
                  <img className='footer-icons' src='https://cdn-icons.flaticon.com/png/512/3669/premium/3669739.png?token=exp=1645395257~hmac=1e177bd24b013bdd2561f0009abb3133' alt='LinkedIn' />
                </a>
              </div>
            </div>
          </div>
        
      </section>
    ) 
  }
}

export default Apresentation