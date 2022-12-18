import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
