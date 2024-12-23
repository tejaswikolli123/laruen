import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const AwsForm = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: 700, fontSize: '68px', textAlign: 'center' }}
      >
        Your{' '}
        <span style={{ color: '#971517', fontWeight: 700, fontSize: '68px' }}>
          AWS Transformation
        </span>{' '}
        Starts Here!
      </Typography>

      <Box
        sx={{
          width: '85%',
          display: 'flex',
          flexDirection: 'row',
          padding: '30px',
          gap: '10px',
        }}
      >
        
        <Box
          sx={{
            width: '60%',
            backgroundColor: '#f3f3f3',
            display: 'flex',
            alignItems: 'center',
            padding: '40px',
            borderRadius: '50px 0 0 50px',
            border: '1px solid black',
          }}
        >
         <Box component="form" noValidate>
            <label htmlFor="name">Name</label>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <label htmlFor="email">Email</label>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
              />
              <label htmlFor="message">Message</label>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#b71c1c",
                  color: "#fff",
                  padding: "10px",
                  marginTop: 2,
                  "&:hover": { backgroundColor: "#880e0e" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>


        
        <Box sx={{width:'40%',
        display:'flex',flexDirection:'column-reverse',
        padding:'40px',
        borderRadius:'0px 50px 50px 0px',
        border:'1px solid black',
         backgroundImage:
            'url(https://png.pngtree.com/thumb_back/fh260/background/20220307/pngtree-abstract-slice-maroon-image_1066936.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover' }}>
                <Typography variant='h6' sx={{fontWeight:700,color:'white'}}> 
                  Kickstart your <br/> AWS journey<br/>with us
                  </Typography>
            </Box>
      </Box>
    </Box>
  );
};

export default AwsForm;
