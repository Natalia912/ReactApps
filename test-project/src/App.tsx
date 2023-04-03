import useMediaQuery from '@mui/material/useMediaQuery';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BackgroundBox from './components/BackgroundBox';

function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <BackgroundBox>
        <Navbar />
        <Hero matches={matches} />
      </BackgroundBox>
      <Footer matches={matches} />
    </>
  )
}

export default App
