import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleBackendConnect: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setMessage(res.data))
      .catch(err => setMessage('Error connecting to backend'));
  }, []);

  return <div>Backend says: {message}</div>;
};

export default ExampleBackendConnect;
