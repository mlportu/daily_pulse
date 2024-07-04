// src/components/Connect.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ImageList, ImageListItem,ImageListItemBar } from '@mui/material';


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
                    <Grid item xs={6} md={3}>
                        <Item>Kroger</Item>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://1000logos.net/wp-content/uploads/2017/08/Logo-Kroger.png'
                                        src='https://1000logos.net/wp-content/uploads/2017/08/Logo-Kroger.png'
                                        alt="Kroger"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>Factor</Item>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://assets.leads-iq.com/assets/img/cmdea0e1f4a-f5de-4ee3-b0f7-e0db6857db2c.png'
                                        src='https://assets.leads-iq.com/assets/img/cmdea0e1f4a-f5de-4ee3-b0f7-e0db6857db2c.png'
                                        alt="Factor"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>Trifecta</Item>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://i.pcmag.com/imagery/reviews/02QLfUYNhLSOZYYjHQ8jLQQ-7..v1635288397.png'
                                        src='https://i.pcmag.com/imagery/reviews/02QLfUYNhLSOZYYjHQ8jLQQ-7..v1635288397.png'
                                        alt="Trifecta"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>Hello Fresh</Item>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://images.squarespace-cdn.com/content/v1/5d97716aeb25db6ebdc07f9f/1580686095119-IR2C8YAJMCU4JYYFZRSV/hellofresh-hlogo-MatthewPeters.png'
                                        src='https://images.squarespace-cdn.com/content/v1/5d97716aeb25db6ebdc07f9f/1580686095119-IR2C8YAJMCU4JYYFZRSV/hellofresh-hlogo-MatthewPeters.png'
                                        alt="Hello Fresh"
                                    />
                                </ImageListItem>
                        </ImageList>
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