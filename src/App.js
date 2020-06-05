import React from 'react';
import logo from './readmeislam-ico.svg';
import './App.css';
import Donate from './Donate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join us, by liking.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/readmeislam"
          target="_blank"
        >
          Read Me Islam Facebook
        </a>
        <div className='donation'>
        <Donate />
        </div>
      </header>
    </div>
  );
}

export default App;
