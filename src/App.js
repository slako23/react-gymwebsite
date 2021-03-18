import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Content from './Components/Content';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
