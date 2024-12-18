import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Link } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; 
import { styled } from '@mui/material/styles';

const LearnMoreLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: '#B40000',
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const InsightsCard=({ description })=> {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#f4f4f4',
        borderRadius: '20px',
        padding: 2,
        height: '100%',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <LearnMoreLink href="#">
          Learn more <ArrowOutwardIcon sx={{ marginLeft: 1 }} />
        </LearnMoreLink>
      </CardContent>
    </Card>
  );
}

const InsightsSection=()=> {
  return (
    <Box sx={{ padding: 4, maxWidth: 1200, margin: 'auto', textAlign: 'center' }}>
       <Box sx={{ padding: '2rem',
     backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      gap: '40px',
      width: '85%',
     }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          color: '#8B0000', 
          marginBottom: '0.5rem',
        }}
      >
        AWS Insights & Trends
      </Typography>
      <Typography variant="body1" sx={{ color: '#333' }}>
      Explore the latest AWS trends, best practices, and <br/>
      expert insights in our blogs.
      </Typography>
    </Box>

      
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
    
            <InsightsCard
              description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
            />
      
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 'auto', marginX: 2 }} />

            <InsightsCard
              description="For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic."
            />
    
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 'auto', marginX: 2 }} />
    
            <InsightsCard
              description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in sales."
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const AwsInsight=()=> {
  return (
    <InsightsSection />
  );
}

export default AwsInsight;
