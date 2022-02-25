import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

const video = require('./videos/Background.mp4')

function App() {
  return (
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <video id='appVideo' src={ video } autoplay='true' loop='true' muted></video>
        <main className="App">
          <Content />
        </main>
     </BrowserRouter>
  );
}

export default App;
