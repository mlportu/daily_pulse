// src/components/Connect.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ImageList, ImageListItem,ImageListItemBar, ListItemIcon, ThemeProvider} from '@mui/material';
import SpeedSharpIcon from '@mui/icons-material/SpeedSharp';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';

const Connect = () => {
  return (
    <ThemeProvider
        theme={{
        palette: {
            primary: {
            main: '#007FFF',
            dark: '#0066CC',
            },
        },
        }}
    >
    <Box sx={{ flexGrow: 1, m:2 }}>
        <Box sx={{boarderRadius: 1, m:3}}>
            <Box sx={{ width: 1, m:2 }}>
                <Box 
                    sx={{bgcolor: 'primary.main', 
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                        fontWeight: 'bold',
                        fontSize: 26,
                        textAlign: 'center',
                    }}
                >
                    <SyncTwoToneIcon/>
                    Fuel
                </Box>
            </Box>
            <Box sx={{ width: 1, m:2 }}>
                <Grid  display='flex' container spacing={2}>
                    <Grid  item xs={6} md={3}>
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
                        <ImageList  sx={{ width: 1, textAlign: 'center' }}>
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
                        <ImageList sx={{ width: 1, textAlign: 'center' }}>
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
                        <ImageList sx={{ width: 1,  }}>
                                <ImageListItem item xs={6} md={4} textAlign='center'>
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
                <Box>
                    <DirectionsRunTwoToneIcon/>
                    Move
                </Box>
            </Box>
            <Box sx={{ width: 1, m:2 }}>
                <Grid container spacing={2}>    
                    <Grid item xs={6} md={4}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/f0873b00db48ac8dab1e74822d4314ee.w1500.h400.png'
                                        src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/f0873b00db48ac8dab1e74822d4314ee.w1500.h400.png'
                                        alt="Whoop"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Apple_Watch_official_logo.svg/2560px-Apple_Watch_official_logo.svg.png'
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Apple_Watch_official_logo.svg/2560px-Apple_Watch_official_logo.svg.png'
                                        alt="Apple Watch"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://seeklogo.com/images/Q/qura-ring-logo-D4FFD69DBC-seeklogo.com.png'
                                        src='https://seeklogo.com/images/Q/qura-ring-logo-D4FFD69DBC-seeklogo.com.png'
                                        alt="Oura Ring"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Fitbit_logo.svg/2560px-Fitbit_logo.svg.png'
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Fitbit_logo.svg/2560px-Fitbit_logo.svg.png'
                                        alt="Fitbit"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://upload.wikimedia.org/wikipedia/commons/8/8e/IFIT_Health_%26_Fitness_logo.jpg'
                                        src='https://upload.wikimedia.org/wikipedia/commons/8/8e/IFIT_Health_%26_Fitness_logo.jpg'
                                        alt="iFit"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Box sx={{boarderRadius: 1, m:2}}>
             <Box sx={{ width: 1, m:2 }}>
                <Box>
                    <SpeedSharpIcon/>
                    Recover
                </Box>
            </Box>
            <Box sx={{ width: 1, m:2 }}>
                <Grid container spacing={2}>    
                    <Grid item xs={6} md={3}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/f0873b00db48ac8dab1e74822d4314ee.w1500.h400.png'
                                        src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/f0873b00db48ac8dab1e74822d4314ee.w1500.h400.png'
                                        alt="Whoop"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://bedtimesmagazine.com/wp-content/uploads/2023/05/Sleep_Number-Logo.wine_-1.png'
                                        src='https://bedtimesmagazine.com/wp-content/uploads/2023/05/Sleep_Number-Logo.wine_-1.png'
                                        alt="Sleep Number"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://img.coupert.com/ccsimg/8fd6211e7d07ec2aa73aef615d44c8c3.webp'
                                        src='https://img.coupert.com/ccsimg/8fd6211e7d07ec2aa73aef615d44c8c3.webp'
                                        alt="Yoga Body"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ImageList sx={{ width: 1 }}>
                                <ImageListItem item xs={6} md={4}>
                                    <img
                                        srcSet='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNxR0wonS2mwXvj7EVYrAppoiUUo7DkYndg&s'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNxR0wonS2mwXvj7EVYrAppoiUUo7DkYndg&s'
                                        alt="Pliability"
                                    />
                                </ImageListItem>
                        </ImageList>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    </Box>

    </ThemeProvider>
  );
};

export default Connect;