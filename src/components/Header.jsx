import React from 'react';

function Header({ darkMode, toggleTheme }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div className="logo" style={{ fontWeight: 'bold' }}>MyPortfolio</div>
      <nav>
        <a href="#about" style={{ margin: '0 10px' }}>About</a>
        <a href="#projects" style={{ margin: '0 10px' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 10px' }}>Contact</a>
        <button onClick={toggleTheme} style={{ marginLeft: '20px', cursor: 'pointer' }}>
          {darkMode ? '☀️ Chế độ Sáng' : '🌙 Chế độ Tối'}
        </button>
      </nav>
    </header>
  );
}

export default Header;