import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fade from 'react-reveal/Fade';

function App() {
  

  return (
    <>
    <Fade>
    <div style={{scrollBehavior: 'smooth'}}>
      <Navbar />
      <Hero />
      <About />
    </div>
    </Fade>
    </>
  )
}

export default App
