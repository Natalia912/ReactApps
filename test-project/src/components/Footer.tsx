import { FC } from "react";

import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Logo from "../assets/Logo";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Twitter  } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: FC<{matches: boolean}>= ({matches}) => {
  return ( 
    <footer className="footer">
      <Container>
        <div className="row-1">
          <div className="footer-logo">
            <Logo />
            <div className="footer-logo-text">
              <p>Soirées</p>
              <p>From Paris with ❤️</p>
            </div>
          </div>
          <div className="footer-login">
            <Button sx={{color: grey[500], textTransform: 'capitalize'}}>Partner Login</Button>
            {matches && <img src="./united-kingdom.png" alt="uk" />}
          </div>
        </div>
        <div className="row-2">
          <p>©️ soire.es All rights reserved</p>
          <ul className="footer-nav">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <ul className="icons">
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930' }}
            > 
              <Twitter sx={{color: '#82b1ff'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930' }}
            >
              <GitHubIcon sx={{color: '#82b1ff'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930' }}
            >
              <FacebookOutlinedIcon sx={{color: '#82b1ff'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ mr: 3, background: '#282930'}}
            >
              <InstagramIcon sx={{color: '#82b1ff'}}/>
            </IconButton>
            <IconButton 
              size={matches ? 'large' : 'medium'}
              edge="start"
              color="primary"
              sx={{ background: '#282930' }}
            >
              <LinkedInIcon sx={{color: '#82b1ff'}}/>
            </IconButton>
          </ul>
        </div>
      </Container>
    </footer> 
  );
}

export default Footer;