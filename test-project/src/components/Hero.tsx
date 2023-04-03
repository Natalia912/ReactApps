import { FC, useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import styled from "@emotion/styled";


const InfoButton = styled(Button)({
  background: 'transparent', 
  border: 'none', 
  position: 'absolute', 
  top: '55%', 
  right: '25%'
})

const HeroBox = styled(Box)<{matches: boolean}>(({matches}) => ({
  background: '#282930', 
  borderRadius: '20px', 
  padding: matches ? "60px 40px" : '30px', 
  display: 'flex', 
  flexDirection: matches ? 'row' : 'column',
  gap: 20,
  alignItems: matches ? 'center' : 'start', 
  justifyContent: 'space-between',
  transform: 'translateY(60%)',
  position: 'relative',
  zIndex: 10
}))

const HeroContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh'
})

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
      <HeroContainer>
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
          fontWeight='500'
        >
          We capture the fun and protect your privacy.
        </Typography>
      </HeroContainer>
      <InfoButton 
        aria-describedby={id}
        onClick={handleClick} 
      >
        <InfoIcon sx={{color: '#fff', width: '56px'}}  />
      </InfoButton>
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
        <List
          sx={{
            width: '250px',
            background: '#282930'
          }}
        >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosIcon sx={{color: 'secondary.main'}}/>
              </IconButton>
          }>
            <ListItemIcon>
              <PersonIcon sx={{color: 'text.secondary'}} />
            </ListItemIcon>
            <ListItemText secondary="Establishment" primary="Le Balajo" />
             

          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosIcon sx={{color: 'secondary.main'}}/>
              </IconButton>
            }
          >
            <ListItemIcon>
              <PersonIcon sx={{color: 'text.secondary'}} />
            </ListItemIcon>
            <ListItemText secondary="Shot by" primary="Jamie Morris" />            
          </ListItem>
        </List>
      </Popover>
      <HeroBox matches={matches}>
        <Typography variant="h3" fontWeight='600' sx={{fontSize: { xs: '32px', sm: '64px'}}}  color='secondary'>Find My Pictures</Typography>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{padding: '10px 60px', width: {sm:'auto', xs:'100%'}}}>Go</Button>
      </HeroBox>
    </Container>
  );
}

export default Hero;