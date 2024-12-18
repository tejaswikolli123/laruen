import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Main = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#7C0000',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px',
        color: '#fff',
        maxWidth: '1000px',
        margin: '50px auto',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
    
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Powering Your Future with AWS Cloud Solutions
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: '1.6' }}>
          At Lauren Group, we leverage the power of AWS to help organizations fast-track their digital transformation,
          optimize cloud strategies, and drive innovation in a technology-driven world.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#5C0000',
            '&:hover': {
              backgroundColor: '#4A0000',
            },
            padding: '10px 20px',
          }}
        >
          Learn More About Us
        </Button>
      </Box>

      {/* Right Image */}
      <Box sx={{ maxWidth: '45%' }}>
        <img
          src="https://healthxapp.com/images/Asset%201.png"
          alt="AWS Cloud Solutions"
          style={{ width: '100%', borderRadius: '10px',backgroundColor: '#7C0000' }}
        />
      </Box>
    </Box>
  );
};

export default Main;
