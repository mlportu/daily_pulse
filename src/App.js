import React from 'react';
import Recovery from './components/Recovery';
import Fuel from './components/Fuel';
import Move from './components/Move';
import Layout from './components/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


/*import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';*/

import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
      
      <BrowserRouter>
        <Provider store = {store}>
          <div className="App">
            <header className="App-header">
              <p>
                  <div>
                    <Routes>
                      <Route path="/" element ={<Layout/>}/>
                      <Route path="/Move" element={<Move/>} />
                      <Route path="/Recovery" element={<Recovery/>} />
                      <Route path="/Fuel" element={<Fuel/>} />
                      {/* Add your components and routes here */}
                    </Routes>
                  </div>
              </p>
            </header>
          </div>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
