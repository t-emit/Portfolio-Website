import { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainApp from './components/MainApp'; // rename your App content here

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <LandingPage onEnter={() => setEntered(true)} />
      ) : (
        <MainApp />
      )}
    </>
  );
}

export default App;
