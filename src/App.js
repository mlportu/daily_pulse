import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import Grid  from '@mui/material/Grid';
import Header from './components/Header/Header';


/*import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';*/


function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation ();

  useEffect(()=> {
    const parsedTitle = location.pathname.replace(/\W/g,' ');
    console.log(location.pathname);
    console.log(parsedTitle);
    setTitle(parsedTitle);
  },[location]);


  
  return (
    <Grid container>
        <Header title={title} />
   
        <Outlet />
    </Grid>
  
  );
}

export default App;
  