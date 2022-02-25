import React, { Component } from 'react'
import '../style/Skills.css'

const reactImg = require('../images/React.png');
const reduxImg = require('../images/Redux.png');

class Skills extends Component {
  state = {
    phrases: ['Passe o mouse pelas Logos para informações', 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.', 'CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.', 'HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.', 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.', 'Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário. Semelhante pela arquitetura Flux do Facebook, foi criado por Dan Abramov e Andrew Clark.'],
    index: 0,
  }

  mouseOverHandler = ({ target }) => {
    if (target.alt === 'React logo') {
      this.setState({ index: 1 })
    }
    if (target.alt === 'Css logo') {
      this.setState({ index: 2 })
    }
    if (target.alt === 'Html logo') {
      this.setState({ index: 3 })
    }
    if (target.alt === 'JS logo') {
      this.setState({ index: 4 })
    }
    if (target.alt === 'Redux logo') {
      this.setState({ index: 5 })
    }
  }

  mouseOutHandler = () => {
    this.setState({ index: 0 })
  }

  render() {
    const { phrases, index } = this.state;
    return (
      <section className='Skills-section'>
        <div className = 'logos'>
          <h2 id='h2-skills'>Skills</h2>
          <img onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} className='icons' src={ reactImg } alt='React logo'></img>
          <img onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} className='icons' src='https://cdn-icons-png.flaticon.com/512/888/888847.png' alt='Css logo'></img>
          <img onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} className='icons' src='https://cdn-icons-png.flaticon.com/512/888/888859.png' alt='Html logo'></img>
          <img onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} className='icons' id='js-logo' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='JS logo'></img>
          <img onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} className='icons' id='redux-logo' src= { reduxImg } alt='Redux logo'></img>
        </div>
         <div className = 'descriptions'>
          <p className='description-p'>{phrases[index]}</p>
        </div>
      </section>
    )
  }
}

export default Skills