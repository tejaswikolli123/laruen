import { Avatar, Box, Button, Card, CardActions, CardContent, IconButton, Typography,List,ListItem,} from '@mui/material'
import React, { useRef,useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Testimonial = () => {
    const scrollRef = useRef(null);


  const cards = [
    { title: 'Card 1', 
        description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        description1: 'John Smith',
        description2:'Marketing Director at xyz Corp',
     },
    { title: 'Card 2', 
        description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        description1: 'John Smith',
        description2:'Marketing Director at xyz Corp'
    },
    { title: 'Card 3', 
        description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        description1: 'John Smith',
        description2:'Marketing Director at xyz Corp'
    },
    { title: 'Card 4', 
        description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        description1: 'John Smith',
        description2:'Marketing Director at xyz Corp'
     },
    
  ];

  const [currentStep, setCurrentStep] = useState(1); 
  const totalSteps = 4; 

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    scrollRight();
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    scrollLeft();
  };


  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' }); // Scroll 300px to the left
    }
  };

  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' }); // Scroll 300px to the right
    }
  };

  return (
    <Box sx={{ width:'100%',
              height:'95vh',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent:'center',
              padding:'20px 0px',
              gap:'50px',
              backgroundImage:'url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNuBZt345xaySFSYL1_4sWDcZuwXWjQGU6uU6WIxT8yBHjj616)',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover' }}>

      <Box sx={{ display: 'flex',flexDirection:'row', justifyContent: 'left',alignItems:'center',gap:'40px', width: '85%', alignItems:'center', }}>
      <Typography variant='h3' sx={{ fontWeight: 'bold', color:'white' }}>Testimonial</Typography>
      <p style={{color:'white',lineHeight:'25px'}}>Hear from Our Satisfied Client: Read Our Testimonials<br/>
          to Learn More about Our AWS Solutioning</p>  
      </Box>

  
      <Box 
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 8,
          padding:'2',
          width: '100%',
          height:'420px',
          '&::-webkit-scrollbar': {
            display: 'none',
          } 
        }}
        ref={scrollRef} 
      >
        {cards.map((card, index) => (
          <Box variant='outlined' key={index} 
            sx={{ minWidth:'40%', maxWidth: '45%',
                  padding:2,
                  height:'300px',
                  opacity:index + 1 === currentStep
                  ?'1':'0.5'}}>
            
            <Box sx={{  width:'100%',
                        height:'350px',
                        backgroundColor:'black',
                        boxShadow: '0 0 0 2px white',
                        borderRadius:'30px'}}>
              <Box sx={{display:'flex',flexDirection:'column',padding:'30px'}}>
              <p style={{color:'white',lineHeight:'25px',fontSize:'20px'}}>{card.description}</p>
              <Typography  variant='h6' sx={{fontSize:'25px',fontWeight:'bold',color:'white'}}>{card.description1}</Typography>
              <Typography sx={{color:'white',fontSize:'20px',fontStyle:'italic'}}>{card.description2}</Typography>
              </Box>
            </Box>
            <Box sx={{
                    width:'50px',
                    height:'50px',
                    backgroundColor:'black',
                    borderTop:'2px  solid white',
                    borderRight:'2px solid white',
                    rotate:'135deg',
                    marginLeft:'50px',
                    position:'relative',
                    bottom:'8.2%',
                    zIndex:'0'
                }}/>
            
          </Box>
        ))}
        
      </Box>
      
      <Box sx={{width:'85%',display:'flex',flexDirection:'row', alignItems:'center'}}>
      
      <Box sx={{width:'50%', display:'flex',justifyContent:'left'}}>
        <IconButton onClick={handlePrevious} sx={{ padding: 2,color:'white' }}>
        <Avatar sx={{width:'50px',height:'50px',backgroundColor:'rgba(0, 0, 0, 0.5)',border:'1px solid white'}}><ArrowBackIcon sx={{fontSize:'30px'}}/></Avatar>
        </IconButton>
        </Box>

        <Box sx={{width:'50%', display:'flex',justifyContent:'right'}}>
        <IconButton onClick={handleNext} color="primary" sx={{ padding: 2,color:'white' }}>
        <Avatar  sx={{width:'50px',height:'50px',backgroundColor:'rgba(0, 0, 0, 0.5)',border:'1px solid white'}}><ArrowForwardIcon sx={{fontSize:'30px'}}/></Avatar>
        </IconButton>
        </Box>

      </Box>
      

    </Box>

    
  );
};

export default  Testimonial;