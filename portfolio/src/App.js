import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main className="App">  
          <Content />
        </main>
     </BrowserRouter>
  );
}

export default App;
