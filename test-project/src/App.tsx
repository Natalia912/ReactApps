import useMediaQuery from '@mui/material/useMediaQuery';

import { Container } from '@mui/material';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="App">
      <div className='background'>
        <Navbar matches={matches} />
        <Hero matches={matches} />
      </div>
      <Footer matches={matches} />
    </div>
  )
}

export default App
