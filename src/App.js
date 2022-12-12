// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Header from './Components/Header';
import About from './Components/About';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;