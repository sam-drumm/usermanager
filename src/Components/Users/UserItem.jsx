import React from "react";
import Card from "../UI/Card";
import './UserItem.css'

function UserItem(props) {
return (
    <li>
        <Card >
            <div className="user-item__name">{props.username} ({props.age} years old)</div>
        </Card>
    </li>
)

}

export default UserItem