import { useState, Fragment, FC } from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from "@mui/system";
import Logo from "../assets/Logo";
import Button from "@mui/material/Button";
import Switch, { switchClasses } from '@mui/joy/Switch';

const SwitchComp= () => {
  return (
    <Switch
      color='primary'
      checked
      slotProps={{
        track: {
          children: (
            <Fragment>
              <Box sx={{width: '14px', height: '14px', background: '#fff', borderRadius: '50%', ml: '6px'}}></Box>
            </Fragment>
          ),
        },
        
      }}
      sx={{
        '--Switch-thumbSize': '22px',
        '--Switch-trackWidth': '50px',
        '--Switch-trackHeight': '28px',
        [`&.${switchClasses.checked}`]: {
        '--Switch-thumbBackground': 'rgb(28, 27, 32)',
        },
        mr: 2
      }}
    />
  )
}

const Navbar: FC<{matches: boolean}>  = ({matches}) => {
  const [open, setOpen] = useState(false);

  return ( 
    <Container maxWidth='lg'>
      <Box sx={{  width: '100%' }}>
        <nav className="navbar">
            <Logo />
            <div className="navbar-items">

              {!matches && (
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon sx={{color: 'white'}} />
                </IconButton>
              )}
              {matches && <SwitchComp />}
              {matches && <Button variant="contained" size='small' sx={{textTransform: "inherit"}}>I'm a photographer</Button>}
              {matches && <Button variant="contained" size='small' sx={{textTransform: "inherit"}}>I'm a partner</Button>}
              
            </div>
            <Drawer
              anchor='left'
              open={open}
              onClose={() => setOpen(false)}
              sx={{}}
            >
              <Box sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: '40px 20px', background: 'rgb(28, 27, 32)', height: '100%', minWidth: '200px'}}>
                <Box sx={{display: "flex", flexDirection: 'column', gap: 2}}>
                  <Button variant="contained" size='small' sx={{color: "rgb(28, 27, 32)", background: '#fff', textTransform: "inherit"}}>I'm a photographer</Button>
                  <Button variant="contained" size='small' sx={{color: "rgb(28, 27, 32)", background: '#fff', textTransform: "inherit"}}>I'm a partner</Button>
                </Box>
                <Box sx={{display: "flex", gap: 2, alignItems: 'center', justifyContent:'space-between'}}>
                  <SwitchComp />
                  <img src="./united-kingdom.png" alt="uk" />
                </Box>
              </Box>
            </Drawer>
        </nav>
      </Box> 
    </Container>
  );
}

export default Navbar;