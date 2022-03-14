import React, { useState } from 'react';
import Users from './Components/Users';

const seedUsers = [
  {
    id: '1',
    username: 'johnny',
    age: '32'
  },
  {
    id: '1',
    username: 'jimbo',
    age: '23'
  },
  {
    id: '2',
    username: 'jane',
    age: '34'
  }
]

function App() {
  const [user, setUser] = useState(seedUsers)

  return (
    <div>

    </div>
  );
}

export default App;
