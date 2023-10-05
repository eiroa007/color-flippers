import './App.css';
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';

const App = () => {
  
  return (
    <>
      <DigitalClock/>
      <Countdown/>
      <Stopwatch/>
    </>
  )
};

export default App;
