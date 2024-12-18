import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://www.lauren.co.in/_next/static/media/hero_image.6711f082.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#7C0000',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        padding: '20px',
      }}
    >
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAMAAACTisy7AAAANlBMVEVHcEzJOCjJOCjJOCjJOCjJOCjJOCjJOCjJOCjJOCjJOCjJOCjJOCfJOCjJOCjJOCjJOCjJOCg5z06gAAAAEnRSTlMAQxexkP9VZKM1gXMI2yjG6/XRBy6nAAAAwklEQVR4AX3SRRbEIBAE0EIKpyH3P+xYnDzmr6EdN0pjzljM0WFKUXnMBBMMZqjmcRUj57WG/1EVblyKMcWtVsZ84VAqvWXeojpeaACBVtFsteZdEvx4NmGPTRrQeq/9y2AjXKRSsPK4K5UxMK+LIUaG3ld8ULrHKDMAPqLZ1PCgFjSKOGriyTOgMVKoMCiNUbEWVBvC41uD+dWbl8ixHBfZNT40NQVXSQdarHoa7kxIwUZV13GhGG7FUV/LUUPpa5g3WugHTWl5uOEAAAAASUVORK5CYII="
          sx={{ height: '50px', width: '50px', marginRight: '10px' }}
        />
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '32px' }}>
          LAUREN
        </Typography>
        <Typography variant="h4" sx={{ marginX: '10px', fontSize: '32px' }}>
          x
        </Typography>
        <Box
          component="img"
          src="https://img.icons8.com/win10/512/FFFFFF/amazon-web-services.png" 
          sx={{ height: '40px', width: '80px' }}
        />
      </Box>

      <Typography variant="h3" component="h1" sx={{ maxWidth: '600px', mb: 3 }}>
        Unlock the full power of AWS x Lauren to drive innovation, agility, and growth
      </Typography>

      <Button
        variant="outlined"
        sx={{ borderColor: '#fff', color: '#fff', padding: '10px 20px', fontSize: '16px' }}
        aria-label="Schedule your free AWS consultation"
      >
        Schedule Your Free AWS Consultation
      </Button>
    </Box>
  );
};

export default Header;
