import { FC } from "react";

import Button from "@mui/material/Button";
import Logo from "../assets/Logo";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Twitter  } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography, Container } from "@mui/material";


const FooterContainer = styled(Container)(({theme}) => ({
  backgroundColor: theme.palette.secondary.contrasText,
  marginTop: '150px',
  padding: '20px 16px 50px'
}))

const Footer: FC<{matches: boolean}>= ({matches}) => {
  return ( 
    <Box component='footer' width='100%'>
      <FooterContainer>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Logo />
              </ListItemAvatar>
              <ListItemText 
                primary={
                  <Typography variant="body1" color='textSecondary'>Soirées</Typography>
                }
                secondary={
                  <Typography variant="body1" color='textSecondary'>From Paris with ❤️</Typography>
                }
              />
            </ListItem>
          </List>
          <Stack gap={2} direction='row'>
            <Button sx={{color: grey[500], textTransform: 'inherit'}}>Partner Login</Button>
            {matches && <img src="./united-kingdom.png" alt="uk" />}
          </Stack>
        </Stack>
        <Stack 
          sx={{ 
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            alignItems: 'center',
            width: '100%',
          }} 
          justifyContent='space-between' 
          mt='3rem'
          gap={2}
        >
          <Typography variant="body2" color='textSecondary'>©️ soire.es All rights reserved</Typography>
          <List sx={{display: 'flex'}}>
            <ListItem>
              <Typography variant="body2" color='textSecondary'>Terms</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" color='textSecondary' sx={{whiteSpace: 'nowrap'}}>Privacy Policy</Typography>
            </ListItem>
          </List>
          <Stack direction='row' ml='0'>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930' }}
            > 
              <Twitter sx={{color: 'primary.light'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930' }}
            >
              <GitHubIcon sx={{color: 'primary.light'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930' }}
            >
              <FacebookOutlinedIcon sx={{color: 'primary.light'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930'}}
            >
              <InstagramIcon sx={{color: 'primary.light'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ background: '#282930' }}
            >
              <LinkedInIcon sx={{color: 'primary.light'}}/>
            </IconButton>
          </Stack>
        </Stack>
      </FooterContainer>
    </Box> 
  );
}

export default Footer;