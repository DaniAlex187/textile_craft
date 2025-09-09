import React, { useState } from 'react';
import axios from 'axios';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{
      padding: '4rem 2rem',
      background: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: '#2c3e50'
        }}>
          Get In Touch
        </h2>

        {/* Company Contact Information Section */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1.8rem',
            color: '#2c3e50'
          }}>
            Textile Craft Studio
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {/* Address */}
            <div style={{
              padding: '1rem',
              borderRadius: '8px',
              background: '#f8f9fa'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#2c3e50'
              }}>
                📍
              </div>
              <h4 style={{
                margin: '0 0 0.5rem 0',
                color: '#2c3e50',
                fontSize: '1.2rem'
              }}>
                Visit Our Studio
              </h4>
              <p style={{
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                17 Ravensburg Street<br />
                Office Estate<br />
                Cluj Napoca
              </p>
            </div>

            {/* Phone */}
            <div style={{
              padding: '1rem',
              borderRadius: '8px',
              background: '#f8f9fa'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#2c3e50'
              }}>
                📞
              </div>
              <h4 style={{
                margin: '0 0 0.5rem 0',
                color: '#2c3e50',
                fontSize: '1.2rem'
              }}>
                Call Us
              </h4>
              <p style={{
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                <a href="tel:+1234567890" style={{
                  color: '#2c3e50',
                  textDecoration: 'none'
                }}>
                  +44...
                </a><br />
                Mon - Fri: 9AM - 6PM<br />
                Sat: 10AM - 4PM
              </p>
            </div>

            {/* Email */}
            <div style={{
              padding: '1rem',
              borderRadius: '8px',
              background: '#f8f9fa'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#2c3e50'
              }}>
                ✉️
              </div>
              <h4 style={{
                margin: '0 0 0.5rem 0',
                color: '#2c3e50',
                fontSize: '1.2rem'
              }}>
                Email Us
              </h4>
              <p style={{
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                <a href="mailto:info@textilecraft.com" style={{
                  color: '#2c3e50',
                  textDecoration: 'none'
                }}>
                  info@textilecraft.com
                </a><br />
                <a href="mailto:orders@textilecraft.com" style={{
                  color: '#2c3e50',
                  textDecoration: 'none'
                }}>
                  orders@textilecraft.com
                </a>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#e8f4fd',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4 style={{
              margin: '0 0 1rem 0',
              color: '#2c3e50'
            }}>
              Custom Tailoring Services
            </h4>
            <p style={{
              margin: 0,
              color: '#666',
              fontSize: '0.95rem',
              lineHeight: '1.6'
            }}>
              Specializing in bespoke suits, elegant dresses, and custom formal wear. 
              Schedule a consultation for personalized fittings and design discussions.
              Free consultations available by appointment.
            </p>
          </div>
        </div>

        {submitted && (
          <div style={{
            background: '#d4edda',
            color: '#155724',
            padding: '1rem',
            borderRadius: '5px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: isSubmitting ? '#6c757d' : '#2c3e50',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;