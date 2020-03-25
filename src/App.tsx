import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const   handleError = () => {
throw new Error('you got an error');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleError()}>Cause an error</button>
      </header>
    </div>
  );
}

export default App;
