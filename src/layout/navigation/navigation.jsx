import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/button">Button</NavLink></li>
        <li><NavLink to="/button-group">Button Group</NavLink></li>
        <li><NavLink to="/icon">Icon</NavLink></li>
        <li><NavLink to="/image">Image</NavLink></li>
        <li><NavLink to="/chip">Chip</NavLink></li>
        <li><NavLink to="/list-group">List Group</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/tabbar">TabBar</NavLink></li>
        <li><NavLink to="/tooltip">Tooltip</NavLink></li>
        <li><NavLink to="/modal">Modal</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
