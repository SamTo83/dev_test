import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import Planets from './components/Planets';

const App = () => (
  <div className={style.main}>
    <Hero />
    <Home />
    <Planets/>
  </div>
);

export default App;
