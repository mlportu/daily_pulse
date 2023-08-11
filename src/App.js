import React from 'react';
import Recovery from './components/Recovery';
import Fuel from './components/Fuel';
import Move from './components/Move';

import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <div>
              <h1>Welcome to Your Wellness App</h1>
              <Route exact path="/Move" component={Move} />
              <Route exact path="/Recovery" component={Recovery} />
              <Route exact path="/Fuel" component={Fuel} />
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
    </Provider>
    
  );
}

export default App;
