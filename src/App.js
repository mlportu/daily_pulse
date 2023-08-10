import React from 'react';
import Recovery from './components/Recovery';
import Fuel from './components/Fuel';
import Move from './components/Move';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>
            <h1>Welcome to Your Wellness App</h1>
            {/* Add your components and routes here */}
          </div>
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
