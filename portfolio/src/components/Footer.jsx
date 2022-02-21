import React, { Component } from 'react'
import '../style/Footer.css';

const linkedin = require('../images/Linkedin.png');

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className='icons-div'>
          <a href='https://github.com/Gabriel-Lambertucci/Trybe' target='_blank' rel='noreferrer'>
            <img className='footer-icons' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' alt='GitHub' />
          </a>
        </div>
        <div className='icons-div'>
          <a href='https://www.linkedin.com/in/gabriel-lambertucci-698765172/' target='_blank' rel='noreferrer'>
            <img className='footer-icons' src={ linkedin } alt='LinkedIn' />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer