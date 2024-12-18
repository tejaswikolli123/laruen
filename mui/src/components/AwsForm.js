import React from "react";
import {Box,Button,TextField, Typography, Paper} from "@mui/material";

const AwsForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h2" component="span" fontWeight="bold">
          Your{" "}
        </Typography>
        <Typography
          variant="h2"
          component="span"
          fontWeight="bold"
          sx={{ color: "darkred" }}
        >
          AWS Transformation
        </Typography>
        <Typography variant="h2" component="span" fontWeight="bold">
          {" "}Starts Here!
        </Typography>
      </Box>

    
      <Box>
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: 2,
            overflow: "hidden",
            maxWidth: "px",
          }}
        >
          {/* Left Section: Form */}
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 4,
              flex: 1,
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

          {/* Right Section: Red Background with Text */}
          <Box
          sx={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column-reverse',
            padding: '40px',
            borderRadius: '0 50px 50px 0',
            border: '1px solid black',
            backgroundImage:
              'url(https://png.pngtree.com/thumb_back/fh260/background/20220307/pngtree-abstract-slice-maroon-image_1066936.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
            position: "relative",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Kickstart your <br />
            AWS journey <br />
            with us
          </Typography>
        </Box>
        </Paper>
      </Box>
    </Box>
    
  );
};

export default AwsForm;
