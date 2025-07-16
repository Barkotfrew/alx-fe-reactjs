import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { name, age, bio } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{bio}</span></p>
    </div>
  );
}

export default UserProfile;
