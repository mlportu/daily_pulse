import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button, Link, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import activHeroImg from '../../assets/images/Activ_Post.png';

// Custom styles using styled from @mui/system


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  backgroundColor: '#68E6DF', // Earthy green tone
}));

const HeroImage = styled('div')({
  height: 400,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#E3F2FD', // Light blue sky tone
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  backgroundColor: '#A5D6A7', // Light green tone
}));

const Footer = styled('footer')(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: '#25BCD5', // Earthy green tone
  color: 'white',
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
            Aggregate your health and wellness information into a single location to promote an intentionl and active approach to your being your best self
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

          <Grid container spacing={4}>
            {[1, 2, 3, 4].map((index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StyledCard>
                  <StyledCardMedia
                    image={`https://source.unsplash.com/featured/?relaxation,${index}`}
                    title="Relaxation Image"
                  />
                  <CardContentStyled>
                    <Typography variant="h6">Recovery Activity {index}</Typography>
                    <Typography variant="body2">
                      Discover ways to unwind and restore your energy with our recommended activities.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      component={Link}
                      href="#"
                      style={{ marginTop: '10px' }}
                    >
                      Learn More
                    </Button>
                  </CardContentStyled>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

{/*How it Works?*/}


{/*Insert Survey of Applications used - integrate with back end here*/}

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
