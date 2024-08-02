import './App.css';
import Homepage from './components/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
