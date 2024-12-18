import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Divider } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; 
import { styled } from '@mui/material/styles'; 

const RoundedButton = styled(IconButton)({
  backgroundColor: '#440000', 
  color: '#FFFFFF',           
  borderRadius: '20px',       
  marginLeft: 16,             
});

const ProgramCard=({ acronym, title, description })=> {
  return (
    <Card
      variant="outlined"
      sx={{
        background: 'linear-gradient(to right, #7C0000, #B40000)',
        color: '#fff',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        marginBottom: 3,
        width: '100%',
        maxWidth: 2000,
        boxShadow: 3,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={1}>
          <Box display="flex" alignItems="center">
            <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
              {acronym}
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{ marginLeft: 2, fontWeight: 'bold' }}
            >
              {title}
            </Typography>
          </Box>
          <RoundedButton>
            <ArrowOutwardIcon />
          </RoundedButton>
        </Box>
        <Divider
          variant="middle"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            marginBottom: 1,
            border: '1px solid white',
          }}
        />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

const AwsExpertise=()=> {
  return (
    <Box sx={{ padding: 4, maxWidth: 1200, margin: 'auto' }}> 
      <Box sx={{
        padding: '2rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '60px',
        width: '90%', 
      }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: '#8B0000', 
            marginBottom: '0.5rem',
          }}
        >
          AWS Expertise Backed by Proven Programs
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            marginLeft: '1.5rem', 
          }}
        >
          Step-by-Step Guide to Achieving<br />
          Your Business
        </Typography>
      </Box>
      <ProgramCard
        acronym="WAFR"
        title="AWS Well-Architected Framework Review"
        description="Optimize your cloud for performance, security, and cost-efficiency with AWS best practices and Lauren's expertise."
      />
      <ProgramCard
        acronym="MAP"
        title="AWS Migration Acceleration Program"
        description="Simplify your move to the cloud. With MAP, we guide you every step of the way to ensure a smooth migration and faster outcomes."
      />
    </Box>
  );
}

export default AwsExpertise;
