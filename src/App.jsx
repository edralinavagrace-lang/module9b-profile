import React from 'react';
import UserProfile from './UserProfile'; // Import the component

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>My Application</h1>
      <UserProfile />
    </div>
  );
};

export default App;