import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
     <BrowserRouter>
        <main className="App">  
          <Content />
        </main>
     </BrowserRouter>
  );
}

export default App;
