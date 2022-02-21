import React, { Component } from 'react'
import Footer from '../components/Footer'
import ProjectPagesHeader from '../components/ProjectPagesHeader'
import '../style/ProjectPageTrybeTunes.css'
import video from '../videos/TrybeTunes.mp4'

class ProjectPageTrybeTunes extends Component {
  render() {
    return (
      <div>
        <ProjectPagesHeader />
        <div className='Project-name-video'>
          <h2>TrybeTunes</h2>
          <video id='TrybeTunes-video' src={ video } controls = { true }></video>
        </div>
        <ul className="habilitiesList"> <h3>
        Habilidades Requeridas
        </h3>
          <li>Fazer requisições e consumir dados vindos de uma API</li>
          <li>Utilizar os ciclos de vida de um componente React</li>
          <li>Utilizar a função setState de forma a garantir que um determinado código só é executado após o estado ser atualizado</li>
          <li>Utilizar o componente BrowserRouter corretamente</li>
          <li>Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route</li>
          <li>Utilizar o Switch do React Router</li>
          <li>Usar o componente Redirect pra redirecionar para uma rota específica</li>
          <li>Criar links de navegação na aplicação com o componente Link</li>
        </ul>
        <Footer />
      </div>
    )
  }
}

export default ProjectPageTrybeTunes