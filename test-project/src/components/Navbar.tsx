import { useState, Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from "@mui/system";
import Logo from "../assets/Logo";
import Button from "@mui/material/Button";
import Switch, { switchClasses } from '@mui/joy/Switch';
import { AppBar, Stack, styled, Toolbar } from "@mui/material";

// const SwitchComp= () => {
//   return (
//     <Switch
//       color='primary'
//       checked
//       slotProps={{
//         track: {
//           children: (
//             <Fragment>
//               <Box sx={{width: '14px', height: '14px', background: '#fff', borderRadius: '50%', ml: '6px'}}></Box>
//             </Fragment>
//           ),
//         },
        
//       }}
//       sx={{
//         '--Switch-thumbSize': '22px',
//         '--Switch-trackWidth': '50px',
//         '--Switch-trackHeight': '28px',
//         [`&.${switchClasses.checked}`]: {
//         '--Switch-thumbBackground': 'rgb(28, 27, 32)',
//         },
//         mr: 2
//       }}
//     />
//   )
// }

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 100,
  paddingLeft: '0 !important',
  paddingRight: '0 !important'
})

const NavBox = styled(Box)({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '40px 20px',
  background: 'rgb(28, 27, 32)',
  height: '100%',
  minWidth: '200px'
})

const StyledNavButton = styled(Button)(({ theme }) => ({
  textTransform: "inherit",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.contrastText,
  }
}));


const Navbar  = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <Container maxWidth='lg'>
      <AppBar position="static" color="transparent" sx={{boxShadow: 'none'}}>
        <StyledToolbar>
            <Logo />
            <Stack gap={2} direction='row'>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, display: {
                  xs: 'block',
                  sm: 'none'
                } }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon sx={{color: 'white'}} />
              </IconButton>
              <Button 
                variant="contained" 
                size='small' 
                sx={{
                  textTransform: "inherit",
                  display: {
                    xs: 'none',
                    sm: 'block'
                  },
                }}>I'm a photographer</Button>
              <Button 
                variant="contained" 
                size='small' 
                sx={{
                  textTransform: "inherit",
                  display: {
                    xs: 'none',
                    sm: 'block'
                  }  
                }}>I'm a partner</Button>

            </Stack>

            <Drawer
              anchor='left'
              open={open}
              onClose={() => setOpen(false)}
            >
              <NavBox>
                <Stack gap={2}>
                  <StyledNavButton variant="contained" size='small'>I'm a photographer</StyledNavButton>
                  <StyledNavButton variant="contained" size='small'>I'm a partner</StyledNavButton>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <img src="./united-kingdom.png" alt="uk" />
                </Stack>
              </NavBox>
            </Drawer>
        </StyledToolbar>
      </AppBar> 
    </Container>
  );
}

export default Navbar;