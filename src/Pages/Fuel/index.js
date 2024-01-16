// src/components/Fuel.js
import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../Common/CommonButton/CommonButton';
import NotificationBell from '../../Common/NotificationBell/NotificationBell';

const Fuel = () => {

 /* const buttonStyles = {
    fontSize: 20,
    fontWeight: 400,
    backgroundColor: 'red',
    '&:hover': {backgroundColor: 'green'}

  }*/
  return (
  <Grid >
      <h2>Fuel</h2>
      This is where all of the fuel/ diet summary information will go with various APIs
      <CommonButton 
          variant = "contained"
         >
        Test Button
      </CommonButton>
      <NotificationBell iconColor="primary" badgeContent={0}/>

      {/* Add your fuel-related content and functionality here */}
    </Grid>
  );
};

export default Fuel;
