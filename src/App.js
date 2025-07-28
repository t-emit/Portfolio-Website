import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainApp from './components/MainApp'; // rename your App content here

function App() {
  const [entered, setEntered] = useState(false);

  return (
    
    <BrowserRouter basename="/Portfolio-Website">
      {!entered ? (
        <LandingPage onEnter={() => setEntered(true)} />
      ) : (
        <MainApp />
      )}
      </BrowserRouter>
    
  );
}

export default App;
