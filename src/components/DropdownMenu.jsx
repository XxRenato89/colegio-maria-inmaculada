// src/components/DropdownMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ items }) => {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      zIndex: 1000,
      minWidth: '200px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }}>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              style={{
                display: 'block',
                padding: '10px 15px',
                textDecoration: 'none',
                color: '#181760',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#fffbe6'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
