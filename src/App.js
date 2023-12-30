import './App.css';
import Announcement from './components/Announcement';
import CardTemp from './components/CardTemp';
import Companies from './components/Companies';
import CutCosts from './components/CutCosts';
import Hero from "./components/Hero"
import BuildBlock from './components/BuildBlock';
import Customz from './components/Customz';
import Join from "./components/Join";
import Endless from "./components/Endless";
import GetStarted from "./components/GetStarted";
import Footer from './components/Footer';
import Team from './components/Team';
// import Endless from "./components/Endless"

function App() {
  return (
    <div className="App">
      <Announcement />
      <Hero />
      <CardTemp />
      <Companies />
      <CutCosts />
      <BuildBlock />
      <Customz />
      <Team />
      <Join />
      <Endless />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
