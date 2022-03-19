import React from "react";
import UserItem from "./UserItem";
import './UsersList.css'

function UsersList (props) {
    // if (props.items.length ===0) {
    //     return <h2>No users found!</h2>
    // }
return (

<div>
    {props.items.map((user) => (
        <UserItem
        key = {user.id}
        username = {user.username}
        age = {user.age}
        />
    ))}
    </div>
)
}

export default UsersList