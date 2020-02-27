import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sadnes from './Sad';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
*/
let Header=()=>{
    return (
        <div>
        <div>   <HTagsss />
        <Tegs />
        </div>
        </div>

    )
}
let Tegs=()=>{
    return(
        <div className="App">
        <ul>
        <li>
        Body</li>
        <li>qw</li>
        </ul>
        </div>
    );
}
let HTagsss=()=>{
    return (
        <div className="App">
        <ul>
        <li>
        Head of the SPA</li>
        <li>!!!</li>
        </ul>
        </div>
);
}
export default Header;
