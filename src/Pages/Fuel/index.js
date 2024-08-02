import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button, Link, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

// Custom styles using styled from @mui/system
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  backgroundColor: '#2E7D32', // Earthy green tone
}));

const HeroImage = styled('div')({
  height: 400,
  backgroundSize: 'cover',
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
  backgroundColor: '#2E7D32', // Earthy green tone
  color: 'white',
}));

const Fuel = () => {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6">Fuel and Food</Typography>
        </Toolbar>
      </StyledAppBar>

      <HeroImage
        style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/plate-food-with-lean-proteins-whole-grains-colorful-vegetables_140916-10.jpg?w=1480)' }}
      >
        <Container>
          <Typography variant="h3" align="center" style={{ color: 'white', paddingTop: '150px' }}>
            Fuel your Life
          </Typography>
        </Container>
      </HeroImage>

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
