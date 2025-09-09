import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '3rem 2rem 1rem',
      marginTop: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '1.5rem',
              color: '#ecf0f1'
            }}>
              Textile Craft Studio
            </h3>
            <p style={{
              lineHeight: '1.6',
              color: '#bdc3c7',
              marginBottom: '1rem'
            }}>
              Crafting bespoke clothing with passion and precision. 
              Your vision, our expertise.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#" style={{
                color: '#ecf0f1',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>📘</a>
              <a href="#" style={{
                color: '#ecf0f1',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>📷</a>
              <a href="#" style={{
                color: '#ecf0f1',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>🐦</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              fontSize: '1.2rem',
              color: '#ecf0f1'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  Shop
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#contact" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  Contact
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              fontSize: '1.2rem',
              color: '#ecf0f1'
            }}>
              Our Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>
                Custom Suits
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>
                Evening Dresses
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>
                Casual Wear
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>
                Alterations
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              fontSize: '1.2rem',
              color: '#ecf0f1'
            }}>
              Get In Touch
            </h4>
            <div style={{
              color: '#bdc3c7',
              lineHeight: '1.6'
            }}>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                📍 17 Ravensburg Street<br />
                Office Estate<br />
                Cluj Napoca
              </p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                📞 <a href="tel:+44" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none'
                }}>
                  +44...
                </a>
              </p>
              <p style={{ margin: '0' }}>
                ✉️ <a href="mailto:info@textilecraft.com" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none'
                }}>
                  info@textilecraft.com
                </a><br />
                <a href="mailto:orders@textilecraft.com" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none'
                }}>
                  orders@textilecraft.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            margin: 0,
            color: '#bdc3c7',
            fontSize: '0.9rem'
          }}>
            © 2025 Textile Craft Studio. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            <a href="#" style={{
              color: '#bdc3c7',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: '#bdc3c7',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s'
            }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;