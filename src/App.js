import React from 'react';
import Recovery from './components/Recovery';
import Fuel from './components/Fuel';
import Move from './components/Move';

import { BrowserRouter as Router, Route } from 'react-router-dom';


/*import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';*/

import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
      
      <Router>
        <Provider store = {store}>
          <div className="App">
            <header className="App-header">
            <h1>Welcome to Your Wellness App</h1>
              <p>
                <div>
                  <Route exact path="/Move" component={Move} />
                  <Route exact path="/Recovery" component={Recovery} />
                  <Route exact path="/Fuel" component={Fuel} />
                  {/* Add your components and routes here */}
                </div>
              </p>
              
            </header>
          </div>
        </Provider>
      </Router>
  );
}

export default App;
