// src/components/Fuel.js
import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../Common/CommonButton';

const Fuel = () => {

  const buttonStyles = {
    fontSize: 20,
    fontWeight: 400,
    backgroundColor: 'red',
    '&:hover': {backgroundColor: 'green'}

  }
  return (
  <Grid >
      <h2>Fuel</h2>
      This is where all of the fuel/ diet summary information will go with various APIs
      <CommonButton 
          variant = "outlined"
          size = "medium"
          sx = {buttonStyles}
          >Test Button
      </CommonButton>
      {/* Add your fuel-related content and functionality here */}
    </Grid>
  );
};

export default Fuel;
