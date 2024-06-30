// src/components/Login.js

import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; // Update this URL to match your server setup
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Login with Google
      </Button>
    </Container>
  );
};

export default Login;
