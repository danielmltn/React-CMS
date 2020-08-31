import React from 'react';
import {Promo} from './components/Promo/index';
import logo from './logo.svg';
import './App.css';
const largeImage = '/blog_image_1.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Promo title={'test'} description={'descr'} image={{alt: 'test alt', src: largeImage}}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
