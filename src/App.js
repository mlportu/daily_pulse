import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import Grid  from '@mui/material/Grid';


/*import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';*/


function App() {
  return (
    <Grid container>
        <Navbar />
        <Outlet />
    </Grid>
  
  );
}

export default App;
  