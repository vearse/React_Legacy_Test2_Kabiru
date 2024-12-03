import React, { useState } from 'react';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {!token ? (
        <LoginForm setToken={setToken} />
      ) : (
        <Dashboard token={token} />
      )}
    </div>
  );
}

export default App;
