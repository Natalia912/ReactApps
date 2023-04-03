import { Box } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)({
  width: '100%',
  height: 'min-content',
  position: 'relative',
  zIndex: 0,
  '&::before': {
    zIndex: -99,
    backgroundImage: "url('/bg.jpg')",
    backgroundPosition: "center center",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    content: "''",
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  '&::after': {
    zIndex: -99,
    content: "''",
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
})

export default BackgroundBox