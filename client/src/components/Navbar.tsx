import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      background: '#2c3e50',
      padding: '1rem 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{
          color: 'white',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          TextileCraft
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: window.innerWidth > 768 ? 'flex' : 'none',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', transition: 'background 0.3s' }}
             onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
             onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
            Home
          </a>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', transition: 'background 0.3s' }}
             onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
             onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
            Products
          </a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', transition: 'background 0.3s' }}
             onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
             onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
            About
          </a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', transition: 'background 0.3s' }}
             onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
             onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          background: '#34495e',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Home</a>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Products</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>About</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;