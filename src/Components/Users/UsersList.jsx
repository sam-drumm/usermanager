import React from "react";
import UserItem from "./UserItem";

function UsersList (props) {
    if (props.items.length ===0) {
        return <h2>No users found!</h2>
    }
return (
    
<ul className="users-list">
    {props.items.map((user) => (
        <UserItem
        key = {user.id}
        username = {user.username}
        age = {user.age}
        />
    ))}
    </ul>
)
}

export default UsersList