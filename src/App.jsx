import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => (
  <Router>
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<div className="error">Error: Page not found</div>} />
      </Routes>
    </div>
  </Router>
);

export default App;
