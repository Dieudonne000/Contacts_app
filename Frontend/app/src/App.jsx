import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contacts from './contacts';

const App = () => (
    <Router>
        <Routes>
            <Route path="/c" element={<Home />} />
            <Route path="/" element={<Contacts />} />
        </Routes>
    </Router>
);

export default App;
