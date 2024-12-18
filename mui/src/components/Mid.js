import * as React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Box, IconButton, Typography } from '@mui/material';

const Mid = () => {

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px', padding: '20px 0px' }}>
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
        Our Offerings
      </Typography>
      <Typography variant="body1" sx={{ color: '#333' }}>
        From migration to AI, Lauren Group transforms challenges into <br />
        opportunities with cutting-edge AWS services.
      </Typography>
    </Box>
      <ImageList sx={{ width: '85%', height: '132vh' }} cols={2} rowHeight={200} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}
            sx={{
              backgroundColor: '#F3F3F3',
              padding: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '30px',
              boxShadow: '0px 5px 0px 0px'
            }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h5'>{item.heading1}</Typography>
                <Typography variant='h5'>{item.heading2}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', paddingTop: '100px' }}>
                  <Avatar sx={{ backgroundColor: '#971517' }}>
                    <IconButton sx={{ color: 'white' }}>
                      <ArrowOutwardIcon sx={{ width: '30px', height: '30px' }} />
                    </IconButton>
                  </Avatar>
                  <Typography>{item.label}</Typography>
                </Box>
              </Box>
              <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img width={200}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy" />
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    title: 'Box1',
    img: 'https://thetechnologyframework.com/wp-content/uploads/2024/04/bluecAsset-6-2.svg',
    heading1: 'Cloud Migration &',
    heading2: 'Modernization',
    label: 'Learn more'
  },
  {
    title: 'Box2',
    img: 'https://inc4.net/wp-content/uploads/2023/05/Dev-ops.svg',
    heading1: 'DevOps',
    heading2: 'Automation',
    label: 'Learn more'
  },
  {
    title: 'Box3',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgF6-FEeJCbJtZlzxY4zvr5_qHvwiEAzLaA&s',
    heading1: 'Data Engineering',
    heading2: '& Analytics',
    label: 'Learn more'
  },
  {
    title: 'Box4',
    img: 'https://static.vecteezy.com/system/resources/previews/004/655/703/non_2x/trendy-design-icon-of-machine-learning-vector.jpg',
    heading1: 'Machine Learning',
    heading2: 'Solutions',
    label: 'Learn more'
  },
  {
    title: 'Box5',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokuuEf6bAHkt67Lfuyo5ThgXBHxkIWe5xBPBW-fRUCtdJgbr38PDfIzhED5slrqWGjq4&usqp=CAU',
    heading1: 'Security &',
    heading2: 'Compliance',
    label: 'Learn more'
  },
];

export default Mid;
