import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
     <BrowserRouter>
        <video id='background-video' src='https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4' autoplay='true' loop='true'></video>
        <main className="App">  
          <Content />
        </main>
     </BrowserRouter>
  );
}

export default App;
