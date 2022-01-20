import logo from './logo.svg';
import './App.css';
import Service_box from './components/Service_box';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Team/>
    </div>
  );
}

export default App;
