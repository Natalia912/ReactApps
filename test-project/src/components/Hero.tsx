import { FC, useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import { Avatar } from "@mui/joy";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Hero: FC<{matches: boolean}> = ({matches}) => {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return ( 
    <Container maxWidth='lg'>
      <div className="hero">
        <Typography 
          variant="h2" 
          component='h1' 
          fontWeight='600' 
          color='white' 
          mb='2rem'
        >
          Soirées
        </Typography>
        <Typography 
          variant="body1" 
          color='rgb(175,175,175)' 
          fontWeight={500}
        >
          We capture the fun and protect your privacy.
        </Typography>
      </div>
      <button 
        aria-describedby={id} 
        onClick={handleClick} 
        style={{background: 'transparent', border: 'none', position: 'absolute', top: '55%', right: '25%', cursor: 'pointer'}}
        >
        <InfoIcon sx={{color: '#fff', width: '56px'}}  />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            background: '#282930', 
            width: '100%',
            height: '100%',
            padding: "20px"
          }}
        >
          <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px', justifyContent:'space-between'}}>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
              <Avatar alt='person' src="./1.jpg" />
              <div>
                <p style={{color: 'white', opacity: 0.4, fontSize: '12px'}}>Establishment</p>
                <p style={{color: 'white', marginTop: '4px'}}>Le Balajo</p>
              </div>
            </div>
            <ArrowForwardIosIcon sx={{color: '#fff'}}/>
          </div>
          <div style={{display: 'flex', gap: '10px', alignItems: 'center', justifyContent:'space-between'}}>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
              <Avatar alt='person' src="./1.jpg" />
              <div>
                <p style={{color: 'white', opacity: 0.4, fontSize: '12px'}}>Shot by</p>
                <p style={{color: 'white', marginTop: '4px'}}>Jamie Morris</p>
              </div>
            </div>
            <ArrowForwardIosIcon sx={{color: '#fff', ml: '20px'}}/>
          </div>
        </Box>
      </Popover>
      <Box 
        sx={{
            background: '#282930', 
            borderRadius: '20px', 
            padding: matches ? "60px 40px" : '30px', 
            display: 'flex', 
            flexDirection: matches ? 'row' : 'column',
            gap: 2,
            alignItems: matches ? 'center' : 'start', 
            justifyContent: 'space-between',
            transform: 'translateY(60%)',
            position: 'relative',
            zIndex: 10
          }}>
        <Typography variant="h3" fontWeight='600' fontSize={matches ? '64px' : '32px'} color='white'>Find My Pictures</Typography>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{padding: '10px 60px', width: matches ? 'auto' : '100%'}}>Go</Button>
      </Box>
    </Container>
  );
}

export default Hero;