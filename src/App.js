import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component import
import Navigation from './Elements/Navigation/Navigation';
import Home from './Elements/Home';
import Calendar from './Elements/Calendar/Calendar';
import ListView from './Elements/ListView/ListView';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/calendars" element={<Calendar />}/>
          <Route exact path="/content-manager" element={<ListView />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
