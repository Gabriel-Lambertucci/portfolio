import React, { Component } from 'react'
import '../style/Footer.css';

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
            <img className='footer-icons' src='https://cdn-icons.flaticon.com/png/512/3669/premium/3669739.png?token=exp=1645395257~hmac=1e177bd24b013bdd2561f0009abb3133' alt='LinkedIn' />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer