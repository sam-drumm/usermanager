import React, { useState } from 'react';
import Users from './Components/Users/Users';
import NewUser from './Components/NewUser/NewUser';
// const seedUsers = [
//   {
//     id: '1',
//     username: 'johnny',
//     age: '32'
//   },
//   {
//     id: '2',
//     username: 'jimbo',
//     age: '23'
//   },
//   {
//     id: '3',
//     username: 'jane',
//     age: '34'
//   }
// ]

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
