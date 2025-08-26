import './App.css';
import Notes from './Notes';
import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const handleLoginSuccess = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const handleLogout = () => {
    setToken('');
    setUser(null);
    setShowLogin(true);
  };

     if (user) {
     return (
       <div className="app-container">
         <h1>MERN Assignment Project</h1>
         <p>Welcome, {user.name}!</p>
         <button onClick={handleLogout}>Logout</button>
         <Notes token={token} />
       </div>
     );
   }

  return (
    <div className="app-container">
      <h1>MERN Assignment Project</h1>
      {!showLogin ? (
        <Register onSwitchToLogin={() => setShowLogin(true)} />
      ) : (
        <Login
          onSwitchToRegister={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default App;