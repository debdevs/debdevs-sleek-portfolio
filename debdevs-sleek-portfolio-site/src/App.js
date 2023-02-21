import logo from './logo.svg';
import './App.css';
import HomeHero from './components/templates/HomeHero/HomeHero';
import Navbar from './components/UI/organisms/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeHero />
    
    </div>
  );
}

export default App;
