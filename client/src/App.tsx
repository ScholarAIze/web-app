import { useEffect } from 'react';
import api from './api';

function App() {
  useEffect(() => {
    api.get('/healthz')
      .then(res => console.log('API is healthy:', res.data))
      .catch(err => console.error('API error:', err));
  }, []);

  return <h1>MVP scaffold running</h1>;
}

export default App;
