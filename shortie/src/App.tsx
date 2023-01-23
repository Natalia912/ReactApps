import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Shortener from './components/Shortener/Shortener';
import Stats from './components/Stats/Stats';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Shortener />
      <Stats />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
