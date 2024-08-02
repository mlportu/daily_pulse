import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button, Link, Card, CardMedia, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
    backgroundColor: '#2E7D32', // Earthy green tone
  },
  heroImage: {
    height: 400,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  section: {
    padding: theme.spacing(4, 0),
    backgroundColor: '#E3F2FD', // Light blue sky tone
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  cardMedia: {
    height: 200,
  },
  cardContent: {
    backgroundColor: '#A5D6A7', // Light green tone
  },
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: '#2E7D32', // Earthy green tone
    color: 'white',
  },
}));

const Recover = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Relaxation & Recovery</Typography>
        </Toolbar>
      </AppBar>
      
      <div
        className={classes.heroImage}
        style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?nature,relaxation)' }}
      >
        <Container>
          <Typography variant="h3" align="center" style={{ color: 'white', paddingTop: '150px' }}>
            Embrace the Healing Power of Nature
          </Typography>
        </Container>
      </div>
      
      <Container className={classes.section}>
        <Typography variant="h4" align="center" gutterBottom>
          Intentional Recovery
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Recovery is a core part of a healthy lifestyle and is critical for well-being when paired with exercise, movement, and a balanced diet. Explore our resources to help you relax and rejuvenate.
        </Typography>
        
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://source.unsplash.com/featured/?relaxation,${index}`}
                  title="Relaxation Image"
                />
                <CardContent className={classes.cardContent}>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <footer className={classes.footer}>
        <Container>
          <Typography variant="body1" align="center">
            &copy; 2024 Relaxation & Recovery. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Recover;
