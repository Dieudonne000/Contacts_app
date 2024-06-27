import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contacts from './contacts';
import './App.css'
import './index.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </Router>
);

export default App;
