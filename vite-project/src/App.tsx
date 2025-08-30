import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/page';
import Restaurant from './Restaurant/page'
import './App.css'
import Rooms from './Rooms/page';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;