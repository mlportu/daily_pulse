import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button, Link, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import activHeroImg from '../../assets/images/Activ_image_Span.jpg';
import discoveryImg from '../../assets/images/Activ_Post.png';
import SpeedSharpIcon from '@mui/icons-material/SpeedSharp';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';

// Custom styles using styled from @mui/system


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  //marginBottom: theme.spacing(4),
  backgroundColor: '#68E6DF', // Earthy green tone
}));

const HeroImage = styled('div')({
  height: 400,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#000000', // Black
  color:'#FFFFFF'//White
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  margin: 'auto',
  marginTop: theme.spacing(4),
  color: '#000000',//Black
}));

const AddAppCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  margin: 'auto',
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  backgroundColor: '#A5D6A7', // Light green tone
}));

const Footer = styled('footer')(({ theme }) => ({
  //marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: '#25BCD5', // Electric Blue
}));

const Fuel = () => {
  return (
    <div>
{/*Navigation*/}
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6">ActivCare</Typography>
        </Toolbar>
      </StyledAppBar>
{/*Hero - Insert Activ Post Image*/}
      <HeroImage
        style={{ backgroundImage: `url(${activHeroImg})` }}
      >
        <Container>
          <Typography variant="h3" align="left" style={{ color: 'white', paddingTop: '150px' }}>
            ActivCare
          </Typography>
          <Typography variant="h4" align="left" style={{ color: 'white', paddingTop: '50px' }}>
            Aggregate your health and wellness information into a single location to promote an intentionl and active approach to being your best self
          </Typography>
        </Container>
      </HeroImage>
{/*End Hero*/}

{/*What We Do - Why*/}
      <Section>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Fuel 
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Nutrition and Fuel is a core part of a healthy lifestyle and is critical for well-being when paired with exercise, movement, and a intentional recovery. Explore our resources to help you fuel your lifestyle.
          </Typography>
        </Container>
      </Section>
   

{/*How it Works?*/}
      <Section>
        <Container>
        <StyledCard>
            <Paper style={{ padding: 20 }} align="center"> 
              <DirectionsRunTwoToneIcon/>
                Move
            </Paper>
            <Typography variant="h4" align="left" style={{ color: 'black'}}>
                Aggregate your health and wellness information into a single location to promote an intentionl and active approach to being your best self
            </Typography>
        </StyledCard>
        <StyledCard>
            <Paper style={{ padding: 20 }} align ="center"> 
                <SyncTwoToneIcon/>
                Fuel
            </Paper>
            <Typography variant="h4" align="left" style={{ color: 'black'}}>
                Aggregate your health and wellness information into a single location to promote an intentionl and active approach to being your best self
            </Typography>
        </StyledCard>
        <StyledCard>
            <Paper style={{ padding: 20 }} align="center"> 
                <SpeedSharpIcon/>
                Recover
            </Paper>
            <Typography variant="h4" align="left" style={{ color: 'black'}}>
                Aggregate your health and wellness information into a single location to promote an intentionl and active approach to being your best self
            </Typography>
        </StyledCard>
        </Container>
      </Section>

{/*Insert Survey of Applications used - integrate with back end here*/}
      <Section>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Tell Us!
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Everyone's health and wellness journey is unique! We would love to hear what applications and data systems you would like to combine with Activ.
          </Typography>
          <AddAppCard>
            <StyledCardMedia
               style={{ backgroundImage: `url(${discoveryImg})` }}
              title="Relaxation Image"
            />
            <CardContentStyled>
              <Typography variant="h6"></Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                href="#"
                style={{ marginTop: '10px' }}
              >
                Add your favorite apps!
              </Button>
            </CardContentStyled>
          </AddAppCard>
        </Container>
      </Section>
{/*Footer*/}
      <Footer>
        <Container>
          <Typography variant="body1" align="center">
            &copy; 2024 Activ Care. All rights reserved.
          </Typography>
        </Container>
      </Footer>
  </div>
  );
};

export default Fuel;
