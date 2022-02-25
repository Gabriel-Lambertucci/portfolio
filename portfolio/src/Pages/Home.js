import React, { Component } from 'react'
import Apresentation from '../components/Apresentation'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import '../style/Home.css'

class Home extends Component {
  render() {
    const { history } = this.props
    return (
      <>
        <Header />
        <Apresentation />
        <Skills />
        <Projects history={ history } />
        <Footer />
      </>
    )
  }
}

export default Home