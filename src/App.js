import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component import
import Navigation from './Elements/Navigation/Navigation';
import Home from './Elements/Home';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h2>UI Sandbox</h2>
        <p>A personal collection of all visual elements made with css and react</p>
        <p>Take these components and alter them as you see fit.</p>
      </div>

      <Navigation />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
