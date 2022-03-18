import React, { useState } from 'react';
import Users from './Components/Users/Users';
import NewUser from './Components/NewUser/NewUser';

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...users]
    })

  }
  return (
    <div>
      <h2>Hiya Sam</h2>
      <NewUser onAddUser = {addUserHandler} />
      <Users users={users} />
    </div>
  )
}

export default App;
