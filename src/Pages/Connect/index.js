// src/components/Connect.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Connect = () => {
  return (
    <Box sx={{ flexGrow: 1, m:2 }}>
        <Box sx={{boarderRadius: 1, m:3}}>
            <Box sx={{ width: 1, m:2 }}>
                <Grid>
                    <Item>Fuel</Item>
                </Grid>
            </Box>
            <Box sx={{ width: 1, m:2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item>Kroger</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>Daily Harvest</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>Trifecta</Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Box sx={{boarderRadius: 1, m:2}}>
            <Box sx={{ width: 1, m:2 }}>
                <Grid>
                    <Item>Move</Item>
                </Grid>
            </Box>
            <Box sx={{ width: 1, m:2 }}>
                <Grid container spacing={2}>    
                    <Grid item xs={6} md={4}>
                        <Item>Whoop</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>Apple Watch</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>Aura Ring</Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Box sx={{boarderRadius: 1, m:2}}>
             <Box sx={{ width: 1, m:2 }}>
                <Grid>
                    <Item>Recover</Item>
                </Grid>
            </Box>
            <Box sx={{ width: 1, m:2 }}>
                <Grid container spacing={2}>    
                    <Grid item xs={6} md={4}>
                        <Item>Whoop</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>Pliability</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>Smart Bed</Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>

 
  );
};

export default Connect;