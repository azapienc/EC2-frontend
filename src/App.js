import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const message = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => {
        console.log(response);
        return response.json()
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Greetings from the ether.
        </p>
        <p>
          {message}
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

export default App;
